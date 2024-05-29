const Contact = () => {
  return (
    <div>
      <h1 className='font-bold text-3xl m-6 p-6'>Contact us!</h1>
      <form className='border border-black border-solid rounded-2xl shadow-2xl p-5 m-5 flex flex-wrap'>
        <input placeholder='Message'></input>
        <input placeholder='E-mail'></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
