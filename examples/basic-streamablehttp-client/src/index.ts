import dotenv from "dotenv";
import readline from "readline/promises";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";

// Load environment variables
dotenv.config();

const DEFAULT_MCP_SERVER = "http://localhost:3000/mcp";
const MAESTRO_MCP_SERVER = process.env.MAESTRO_MCP_SERVER || DEFAULT_MCP_SERVER;
const MAESTRO_API_KEY = process.env.MAESTRO_API_KEY || "";

class MCPClient {
    private mcp: Client;
    private transport: StreamableHTTPClientTransport | null = null;

    constructor() {
        this.mcp = new Client({ name: "basic-mcp-client", version: "1.0.0" });
    }

    async connect(serverUrl: string) {
        try {
            const url = new URL(serverUrl);
            this.transport = new StreamableHTTPClientTransport(url, {
                requestInit: {
                    headers: {
                        Authorization: `Bearer ${MAESTRO_API_KEY}`,
                    },
                },
            });
            await this.mcp.connect(this.transport);
            this.setupEvents();
            console.log(`Connected to MCP server at ${serverUrl}`);
        } catch (err) {
            console.error("Failed to connect:", err);
            process.exit(1);
        }
    }

    private setupEvents() {
        if (!this.transport) return;

        this.transport.onclose = async () => {
            console.log("Transport closed");
            await this.cleanup();
        };

        this.transport.onerror = async (err) => {
            console.error("Transport error:", err);
            await this.cleanup();
        };
    }

    async getLatestBlock(): Promise<string> {
        try {
            const result = await this.mcp.callTool({
                name: "rpc_latest_block",
                arguments: {},
            });
            return result.content as string;
        } catch (err) {
            console.error("Error calling rpc_latest_block:", err);
            return "Failed to fetch block.";
        }
    }

    async getBlockInfo(height_or_hash: string): Promise<string> {
        try {
            const result = await this.mcp.callTool({
                name: "rpc_block_info",
                arguments: {
                    height_or_hash: height_or_hash,
                },
            });
            return result.content as string;
        } catch (err) {
            console.error("Error calling rpc_block_info:", err);
            return "Failed to fetch block.";
        }
    }

    async listServerFunctions(): Promise<string> {
        try {
            // Most MCP SDKs provide a listTools or similar method
            const tools = await this.mcp.listTools();
            if (Array.isArray(tools)) {
                return tools
                    .map(
                        (tool: any) =>
                            `- ${tool.name}${
                                tool.description ? ": " + tool.description : ""
                            }`
                    )
                    .join("\n");
            } else if (tools && tools.tools) {
                // Some SDKs return { tools: [...] }
                return tools.tools
                    .map(
                        (tool: any) =>
                            `- ${tool.name}${
                                tool.description ? ": " + tool.description : ""
                            }`
                    )
                    .join("\n");
            } else {
                return JSON.stringify(tools, null, 2);
            }
        } catch (err) {
            console.error("Error listing server functions:", err);
            return "Failed to list server functions.";
        }
    }

    async chatLoop() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        console.log(
            "Type 'latest block', 'block <height_or_hash>', 'list tool', or 'quit'."
        );

        while (true) {
            const input = await rl.question("\n> ");
            if (input.toLowerCase() === "quit") break;

            if (input.toLowerCase() === "latest block") {
                const output = await this.getLatestBlock();
                console.log("\nLatest block:\n", output);
            } else if (input.toLowerCase().startsWith("block")) {
                const parts = input.split(" ");
                let heightOrHash = "840000";
                if (parts.length > 1 && parts[1].trim() !== "") {
                    heightOrHash = parts[1].trim();
                }
                const output = await this.getBlockInfo(heightOrHash);
                console.log("\nBlock info:\n", output);
            } else if (input.toLowerCase() === "list tool") {
                const functions = await this.listServerFunctions();
                console.log("\nAvailable server functions:\n" + functions);
            } else {
                console.log(
                    "Unrecognized command. Try 'block', 'latest block', 'list tools', or 'quit'."
                );
            }
        }

        rl.close();
    }

    async cleanup() {
        await this.mcp.close();
    }
}

async function main() {
    let port = 3000;

    // Optional: Parse CLI args
    for (const arg of process.argv.slice(2)) {
        if (arg.startsWith("--mcp-port=")) {
            const parsed = parseInt(arg.split("=")[1], 10);
            if (!isNaN(parsed)) port = parsed;
        }
    }

    const serverUrl = MAESTRO_MCP_SERVER;
    const client = new MCPClient();
    await client.connect(serverUrl);
    await client.chatLoop();
    await client.cleanup();
    process.exit(0);
}

main();
