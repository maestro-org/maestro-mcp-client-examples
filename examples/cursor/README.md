# Maestro MCP with Cursor

This client example demonstrates how to configure [Cursor](https://cursor.com/) to use [Maestro MCP](https://github.com/maestro-org/maestro-mcp-server).

## Requirements

-   [`npx`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
-   [Maestro API key](https://dashboard.gomaestro.org)

## Configuration

1. Download [Cursor](https://cursor.com/)

2. Add the MCP to Cursor by clicking the button

    [![Install MCP Server](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/install-mcp?name=maestro-mcp-server&config=JTdCJTIyY29tbWFuZCUyMiUzQSUyMm5weCUyMC15JTIwbWNwLXJlbW90ZSUyMGh0dHBzJTNBJTJGJTJGeGJ0LW1haW5uZXQuZ29tYWVzdHJvLWFwaS5vcmclMkZ2MCUyRm1jcCUyMC0taGVhZGVyJTIwQXV0aG9yaXphdGlvbiUzQSUyNCU3QkFVVEhfSEVBREVSJTdEJTIwLS10cmFuc3BvcnQlMjBodHRwLW9ubHklMjIlMkMlMjJlbnYlMjIlM0ElN0IlMjJBVVRIX0hFQURFUiUyMiUzQSUyMkJlYXJlciUyMCUzQ01BRVNUUk9fQVBJX0tFWSUzRSUyMiU3RCU3RA%3D%3D)

3. Update the MCP configuration

    After adding to Cursor, the MCP must be configured to include your [Maestro API key](https://dashboard.gomaestro.org).

    > Be sure to replace the `<MAESTRO_API_KEY>` placeholder before attempting to invoke the installed MCP tools.

    The Environment Variables should resemble the following:

    ```
    AUTH_HEADER = Bearer <your_api_key>
    ```

    ![](https://github.com/user-attachments/assets/f187a235-8af5-4367-996a-2e0a54a06c9d)

4. Click `Install`

## Usage

Now that the MCP is installed and the `mcp.json` is configured with your [Maestro API key](https://dashboard.gomaestro.org), restart Cursor and begin prompting the MCP within the chat interface:

1. Locate the tools icon
   ![](https://github.com/user-attachments/assets/4744b56f-479f-4ee1-a05e-2887a6bce64e)

2. View available MCP tools
   ![](https://github.com/user-attachments/assets/ba577607-1df3-40eb-99e2-c542730da607)

3. Prompt Cursor

-   "Fetch the latest Bitcoin block"
-   "Get the blockchain info for Bitcoin"

    ![](https://github.com/user-attachments/assets/655f19f5-5bc3-4440-90bb-89d4f5539401)

    **NOTE:** You will need to approve the request within Cursor.

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
