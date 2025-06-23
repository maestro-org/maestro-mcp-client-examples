# Basic HTTP Client

A basic MCP client that communicates over HTTP using an API key.

## Prequisites

-   Node 24

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
Type 'latest block', 'block <height_or_hash>', 'list functions', or 'quit'.

> list functions
```
