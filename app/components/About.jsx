var React = require('react');

var About = (props) => {
	return (
		<div>
			<h3 className="text-center">About</h3>
			<p>
				My name is Logan and this is my first React app! I built this for the the
				Complete React Web App Developer Course.
			</p>
			<p>
				Here are some of the tools I used:
			</p>
			<ul>
				<li>
					<a href="https://www.facebook.github.io/react">React</a> - This was the JavaScript
						framework I used.
				</li>
				<li>
					<a href="http://openWeatherMap.org">Open Weather Map</a> - I used Open Weather Map
						to search for wewather data by city name.
				</li>
			</ul>
		</div>
	);
};

module.exports = About;
