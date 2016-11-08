var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here a few examples cities to try out:</p>
      <ol>
        <li>
          <Link to='/?city=Niort'>Niort, FRANCE</Link>
        </li>
        <li>
          <Link to='/?city=Rio'>Rio, BRAZIL</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
