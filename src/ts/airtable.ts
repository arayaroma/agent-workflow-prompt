import Airtable from "airtable";

const base = new Airtable({
  apiKey: import.meta.env.VITE_AIRTABLE_API_KEY,
}).base(import.meta.env.VITE_AIRTABLE_BASE_ID || "");

export type Record = {
  agent: string;
  prompt: string;
  response: string;
};

function create(record: Record) {
  base("prompts").create(
    [
      {
        fields: {
          agent: record.agent,
          prompt: record.prompt,
          response: record.response,
        },
      },
    ],
    function (err) {
      if (err) {
        console.error(err);
        return;
      }
    }
  );
}

export default base;
export { create };
