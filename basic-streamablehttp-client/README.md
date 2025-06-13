# Basic HTTP Client

A basic MCP client that communicates over HTTP using an API key.

## Setup

Install:

```bash
npm install
```

Create a `.env` file in the root:

```
MAESTRO_MCP_SERVER=http://localhost:3000/mcp
MAESTRO_API_KEY=your-api-key-here
```

Build:

```bash
npm run build
```

## Usage

```
npm run start

...

Connected to MCP server at http://localhost:3000/mcp
Type 'block' to fetch latest block or 'quit' to exit.

> block
```

## Local-scoped MCP

### Configure Claude (Desktop)

1. Download Claude Desktop [here](https://claude.ai/download).

2. Open Claude Desktop settings

    ![](https://github.com/user-attachments/assets/2112c203-ae28-4a97-881a-b98a629c7809)

3. Select `Edit Config`

4. Open the Claude App configuration file located at:

-   **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
-   **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

Copy the below contents into this config file.

#### Local-scoped MCP

_After cloning the repos, the server and client files are stored and sourced locally on your machine._

You will need 4 things:

1. Absolute path to `npm`; ie, `which npm`
2. Absolute path to `maestro-mcp-server` repo
3. Absolute path to `maestro-mcp-client` repo
4. Maestro API key

```json
{
    "mcpServers": {
        "maestro-mcp-server": {
            "command": "/ABSOLUTE/PATH/TO/node",
            "args": ["/ABSOLUTE/PATH/TO/maestro-mcp-server/src/index.ts"],
            "env": {
                "MAESTRO_BASE_URL": "https://xbt-mainnet.gomaestro-api.org/v0",
                "MAESTRO_API_KEY": "<MAESTRO_API_KEY>"
            }
        },
        "basic-streamablehttp-client": {
            "command": "/ABSOLUTE/PATH/TO/node",
            "args": [
                "/ABSOLUTE/PATH/TO/maestro-mcp-client/basic-streamablehttp-client/src/index.ts"
            ],
            "env": {
                "MAESTRO_MCP_SERVER": "<MAESTRO_MCP_SERVER_URL>",
                "MAESTRO_API_KEY": "<MAESTRO_API_KEY>"
            }
        }
    }
}
```
