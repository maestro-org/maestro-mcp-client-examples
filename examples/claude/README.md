# Maestro MCP with Claude Desktop

This client example demonstrates how to configure [Claude Desktop](https://claude.ai/download) to use [Maestro MCP](https://github.com/maestro-org/maestro-mcp-server), supporting both local and hosted setups.

## Requirements

-   [`npx`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
-   [Maestro API key](https://dashboard.gomaestro.org)

## Configuration

1. Download [Claude Desktop](https://claude.ai/download).

2. Open Claude Desktop settings.

    ![](https://github.com/user-attachments/assets/2112c203-ae28-4a97-881a-b98a629c7809)

3. Select `Edit Config`

4. Open the Claude App configuration file located at:

-   **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
-   **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

Copy the below contents into this config file, depending on your use-case.

-   [Hosted](#hosted)
-   [Local](#local)

### Hosted

`claude_desktop_config.json`

```json
{
    "mcpServers": {
        "maestro-mcp-server": {
            "command": "npx",
            "args": [
                "-y",
                "mcp-remote",
                "https://xbt-mainnet.gomaestro-api.org/v0/mcp",
                "--header",
                "Authorization:${AUTH_HEADER}",
                "--transport",
                "http-only"
            ],
            "env": {
                "AUTH_HEADER": "Bearer <MAESTRO_API_KEY>"
            }
        }
    }
}
```

### Local

-   Ensure that the [maestro-mcp-server](https://github.com/maestro-org/maestro-mcp-server) is cloned and running locally on your machine.

`claude_desktop_config.json`

```json
{
    "mcpServers": {
        "maestro-mcp-server": {
            "command": "npx",
            "args": [
                "-y",
                "mcp-remote",
                "http://localhost:3000/mcp",
                "--header",
                "Authorization:${AUTH_HEADER}",
                "--transport",
                "http-only"
            ],
            "env": {
                "AUTH_HEADER": "Bearer <MAESTRO_API_KEY>"
            }
        }
    }
}
```

## Usage

Now that the `claude_desktop_config.json` is set, restart Claude Desktop and begin prompting the MCP:

1. Locate the tools icon
   ![](https://github.com/user-attachments/assets/053e1589-faf9-4ec9-bab8-2f77b44f2757)

2. Select `maestro-mcp-server`
   ![](https://github.com/user-attachments/assets/302b2535-8b1c-4cab-b3f6-e244a0ffddcc)

3. View available MCP tools
   ![](https://github.com/user-attachments/assets/91503920-6908-463b-b27f-614acf052ac5)

4. Prompt Claude.

-   "Fetch the latest Bitcoin block"
-   "Get the blockchain info for Bitcoin"

    ![](https://github.com/user-attachments/assets/5389404c-0c42-4e30-abba-80c3a618f9dd)

    **NOTE:** You will need to approve the request within Claude.

## Debugging

### CLI inspector tool

The following tools are useful for debugging a locally-running MCP server.

-   [inspector (official)](https://github.com/modelcontextprotocol/inspector)
-   [mcp-cli](https://github.com/wong2/mcp-cli)

## Contributing

Contributions and feature requests are welcome! Please document clearly as needed. Feel free to submit a [pull request](https://github.com/maestro-org/maestro-mcp-client-examples/compare) or [open an issue](https://github.com/maestro-org/maestro-mcp-client-examples/issues/new).

## Support

If you are experiencing any trouble with the above, [open an issue](https://github.com/maestro-org/maestro-mcp-client-examples/issues/new) or reach out on [Discord](https://discord.gg/ES2rDhBJt3).

## License

[Apache 2.0](../../LICENSE)
