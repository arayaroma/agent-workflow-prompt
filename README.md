# Agent Workflow Prompt
[<img src="/public/chainsaw.png" alt="chainsaw" width="50"/>](/public/chainsaw.png)

A google-chrome extension that uses **Large Language Models (LLMs)** to help users or developers to get better responses to their prompts to the LLMs.

## Agents
The Agent is a Large Language Model (LLM) that can be used to help users in different scenarios. Currently this extension uses GPT3.5, and Gemini, as the LLMs. In the future, we plan to use other LLMs as well like LLaMA. 

## Workflows
The Workflows gives contextualization to the Agent (LLM), and how it can be used to help users in different scenarios.

> Based on this article. [A Complete Guide o LLMs Based Autonomous Agents (Part I)](https://medium.com/the-modern-scientist/a-complete-guide-to-llms-based-autonomous-agents-part-i-69515c016792)

There are four main workflows that is google-chorme extension can be used for:
1. **Reflection**, where the agent reflects on its own actions and learns from them.
2. **Tool Use**, where the agent suggests tools to the user to achieve a goal.
3. **Planning**, where the agent plans a sequence of actions to achieve a goal.
4. **Multi-Agent**, where the agent can act like many agents at once.

## Persistence
The extension has the option to save the user's prompts and responses as well as
the agent into a database called **Airtable**. This is useful for the agent to learn from its past interactions and improve its responses.



