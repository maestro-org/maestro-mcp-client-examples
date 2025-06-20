# Maestro MCP with Claude Desktop

### Configuration

1. Download Claude Desktop [here](https://claude.ai/download).

2. Open Claude Desktop settings

    ![](https://github.com/user-attachments/assets/2112c203-ae28-4a97-881a-b98a629c7809)

3. Select `Edit Config`

4. Open the Claude App configuration file located at:

-   **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
-   **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

Copy the below contents into this config file.

#### Local-scoped MCP

Repositories:

-   [maestro-mcp-server](https://github.com/maestro-org/maestro-mcp-server)
-   [maestro-mcp-client](https://github.com/maestro-org/maestro-mcp-client)

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
                "API_KEY_API_KEY": "<MAESTRO_API_KEY>"
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
