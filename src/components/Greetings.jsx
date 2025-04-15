import PropTypes from 'prop-types';

const Greetings = ({ person, handleAlert }) => {
  return (
    <h1 className="bg-amber-200 p-4 text-center text-shadow text-2xl border-b">
      Hello, World! My name is {person.name} and I am {person.age} years old
      <button
        className="bg-blue-500 text-white px-4 py-6 rounded mt-4"
        onClick={() => handleAlert(person.name)}
      >
        Alert
      </button>
    </h1>
  );
};


Greetings.propTypes = {
  
}

export default Greetings;
