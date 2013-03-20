# harlem-shake -> CSS3, jQuery plugin

## Usage:

First include CSS and scripts:

	<head>
	...
	<link rel="stylesheet" type="text/css" href="css/jquery.harlem-shake-1.0.css">
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
	<script type="text/javascript" src="js/jquery.harlem-shake-1.0.js"></script>
	...
	</head>

Music (harlem-shake.ogg) must be in music/harlem-shake.ogg (in next version this will be configurable)

jquery.harlem-shake-1.0.js searches for music/harlem-shake.ogg (relative path)

Then you can trigger plugin on click or on page load, but I don't recommend on page load because most people don't like autoplayed sounds on webpage

	<script>
		$(function() {

			$('.start').click(function() {
				//just add elements you want to animate
				$('.example, .header1, .header2, .header').harlemShake();
			});

			$('.stop').click(function() {
				//you can stop harlem shake with 'stop' option
				$('.example, .header1, .header2, .header').harlemShake('stop');
			});
		});
	</script>

You can set additional options in data attribute if you use HTML5:

	<div class="harlem-shake-element" data-pivot="true" data-animation="flash" data-animation-speed="fast">
		flash
	</div>

In example above I used data animation "flash" and animation will be "fast".

**Pivot (first dancer)**: You can set pivot with `data-pivot="true"`. Pivot should be only one and my recommendation is to use animation "rotateHalf".

Data animation speed can be "slow" or "fast":
`data-animation-speed="fast|slow"`

Data animation has following options (most are taken from animate.css):

- rotate
- rotateHalf
- scale
- jump
- flash
- shake
- bounce
- tada
- swing
- wobble
- wiggle
- pulse
- flip
- flipInX
- flipOutX
- flipInY
- flipOutY
- fadeIn

Live example on [http://hromnik.com/web/harlem-shake/example-page.html](http://hromnik.com/web/harlem-shake/example-page.html)
