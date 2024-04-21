function chooseWorkflow(prompt: string, workflow: string) {
  if (workflow === "" || undefined) {
    return prompt;
  }
  if (workflow === "reflection") {
    return reflection(prompt);
  }
  if (workflow === "tool-use") {
    return toolUse(prompt);
  }
  if (workflow === "planning") {
    return planning(prompt);
  }
  if (workflow === "multi-agent") {
    return multiAgent(prompt);
  }
}

function reflection(prompt: string) {
  const reflectionPrompt = `
        Instructions:
        1. Reflect on the prompt.
        2. Think about different perspectives.
        3. Write a response.
        4. Submit your response. 
        
        Prompt:
        ${prompt}
        `;
  return reflectionPrompt;
}

function toolUse(prompt: string) {
  const toolUsePrompt = `
    Tools for Problem Solving:

    1. Research:
       - Conduct thorough research to gather relevant information and knowledge about the problem.
       - Utilize search engines, online databases, and other resources to explore different perspectives and solutions.

    2. Analytical Tools:
       - Employ analytical tools such as data analysis software, statistical models, or visualization tools to gain insights and identify patterns.

    3. Problem Decomposition:
       - Break down the problem into smaller sub-problems to simplify the analysis and solution process.
       - Use techniques like flowcharts, decision trees, or mind maps to visualize the problem structure.

    4. Prototyping:
       - Create prototypes or mockups to test and validate potential solutions.
       - Use tools like wireframing software, design tools, or rapid prototyping frameworks.

    5. Simulation:
       - Simulate the problem scenario to understand its behavior and evaluate different strategies.
       - Utilize simulation software, modeling tools, or virtual environments.

    6. Collaboration Tools:
       - Collaborate with others to leverage their expertise and insights.
       - Use communication platforms, project management tools, or version control systems to facilitate collaboration.

    7. Automation:
       - Automate repetitive or time-consuming tasks to improve efficiency.
       - Utilize scripting languages, workflow automation tools, or task automation frameworks.

    8. Evaluation Metrics:
       - Define evaluation metrics to measure the effectiveness and success of different solutions.
       - Use tools like performance monitoring software, A/B testing frameworks, or user feedback systems.

    Prompt:
    ${prompt}
    `;
  return toolUsePrompt;
}

function planning(prompt: string) {
  const plannedPrompt = `
    Plan and Solve the Problem Following These Steps:

    1. Understand the Problem:
       - Read and comprehend the given problem statement thoroughly.
       - Identify the key components, requirements, and constraints of the problem.

    2. Clarify Ambiguities:
       - If there are any ambiguities or unclear aspects in the problem statement, seek clarification or make assumptions to proceed.

    3. Define Objectives:
       - Clearly define the objectives or goals to be achieved through problem-solving.

    4. Analyze the Problem:
       - Break down the problem into smaller, manageable parts.
       - Identify any patterns, relationships, or relevant concepts associated with the problem.

    5. Generate Potential Solutions:
       - Brainstorm and generate multiple potential solutions or approaches to tackle the problem.
       - Consider both conventional and creative solutions.

    6. Evaluate Solutions:
       - Assess the feasibility, effectiveness, and efficiency of each potential solution.
       - Consider the implications and consequences of implementing each solution.

    7. Select Optimal Solution:
       - Based on the evaluation, select the most suitable solution that best addresses the objectives and constraints of the problem.

    8. Develop a Plan:
       - Outline a detailed plan of action to implement the chosen solution.
       - Specify the sequence of steps, resources required, and any potential contingencies.

    9. Execute the Plan:
       - Follow the outlined plan step by step, ensuring accuracy and precision in execution.
       - Monitor progress and make adjustments as necessary to stay on track.

    10. Verify and Validate:
        - After executing the plan, verify the results to ensure they align with the expected outcomes.
        - Validate the solution by checking against predefined criteria or through testing.

    11. Iterate if Necessary:
        - If the solution is not satisfactory or if there are discrepancies, iterate the problem-solving process by revisiting previous steps.
        - Refine the plan or explore alternative solutions if needed.

    12. Document and Communicate:
        - Document the entire problem-solving process, including the steps taken, rationale behind decisions, and outcomes achieved.
        - Communicate the solution effectively, providing clear explanations and justifications.

    Prompt:
    ${prompt}
    `;
  return plannedPrompt;
}
function multiAgent(prompt: string) {
  const multiAgentPrompt = `
    Multi-Agent LLM Prompt:
    1. Identify the problem domain that requires multi-agent collaboration.
    2. Define the roles and responsibilities of each agent involved.
    3. Determine the communication protocol between the agents.
    4. Design the decision-making process for the agents.
    5. Implement the coordination mechanism to ensure effective collaboration.
    6. Test and evaluate the performance of the multi-agent system.
    7. Iterate and refine the system based on the evaluation results.

    Prompt:
    ${prompt}
    `;
  return multiAgentPrompt;
}

export { chooseWorkflow };
