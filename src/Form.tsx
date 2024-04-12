import GeminiLogo from "./GeminiLogo";

const Form = () => {
  return (
    <form className="flex justify-center items-center py-10 bg-purple-950">
      <div className="justify-center items-center px-24 sm:px-20">
        <GeminiLogo />
        <h1 className="text-4xl mb-2 text-white font-bold">AI Prompt</h1>
        <div className="flex flex-col gap-y-2">
          <input type="text" />
          <button
            type="submit"
            className="rounded bg-green-600 px-2 hover:bg-green-700 text-xl text-white py-1"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
