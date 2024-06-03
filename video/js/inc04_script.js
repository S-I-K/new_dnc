$(document).ready(function(){
	var atc04 = $("#atc04").offset().top;
		wH2 = window.innerHeight;
	$(window).on("scroll",function(){
		var scrt = $(window).scrollTop();
		if(scrt > atc04 - wH2) {
			const baseArrow = document.getElementById("base-arrow");
			const grid = document.getElementById("grid");
			let arrows, arrowCenters;
			let numArrowsX, numArrowsY;
			const center = new THREE.Vector2();
			const mousePos = new THREE.Vector2();
			const PI = Math.PI;
			let maxDist;
			
			// Number of Arrows
			let arrowDensity = 16;
			
			/**
			 * Throttler Util
			 */
			function throttle(fn) {
			  let didRequest = false;
			  return param => {
				if (!didRequest) {
				  requestAnimationFrame(() => {
					fn(param);
					didRequest = false;
				  });
				  didRequest = true;
				}
			  };
			}
			
			/**
			 * Map Util
			 */
			function map(value, min1, max1, min2, max2) {
			  return ((value - min1) * (max2 - min2)) / (max1 - min1) + min2;
			}
			
			/**
			 * Init IFFE
			 */
			var init = (function() {
			  window.addEventListener("resize", throttle(handleResize));
			  window.addEventListener("mousemove", throttle(handleMouseMove));
			  handleResize();
			})();
			
			/**
			 * Generate Arrow Grid
			 */
			function generateArrowGrid() {
			  arrows = [];
			  arrowCenters = [];
			
			  // Create grid
			  for (let i = 0; i < numArrowsX * numArrowsY; i += 1) {
				const newArrow = baseArrow.cloneNode(true);
				newArrow.id = `arrow-${i}`;
				newArrow.setAttribute("class", "arrow");
				grid.appendChild(newArrow);
				arrows.push(newArrow);
			
				// save center point for use later
				const arrowRect = newArrow.getBoundingClientRect();
				const arrowCenter = new THREE.Vector2(
				  arrowRect.left + newArrow.clientWidth * 0.5,
				  arrowRect.top + newArrow.clientHeight * 0.5
				);
				arrowCenters.push(arrowCenter);
			  }
			}
			
			/**
			 * Handle Mouse Mover
			 * @param {Event}
			 */
			function handleMouseMove(event) {
			  mousePos.set(event.clientX, event.clientY);
			
			  arrows.forEach((arrow, i) => {
				const vecToMouse = new THREE.Vector2().subVectors(
				  mousePos,
				  arrowCenters[i]
				);
				const angle = vecToMouse.angle();
				const dist = mousePos.distanceTo(arrowCenters[i]);
				arrow.style.setProperty("--arrow-angle", angle);
			  });
			}
			
			/**
			 * Handle Resize
			 */
			function handleResize() {
			  // recreate the grid and elements
			  const largeSide = Math.max(innerWidth, innerHeight);
			  const size = Math.round(largeSide / arrowDensity);
			
			  numArrowsX = Math.ceil(innerWidth / size);
			  numArrowsY = Math.ceil(innerHeight / size);
			  grid.style.setProperty("--num-columns", numArrowsX);
			  grid.style.setProperty("--num-rows", numArrowsY);
			  grid.innerHTML = "";
			  generateArrowGrid();
			  center.set(innerWidth * 0.5, innerHeight * 0.5);
			  maxDist = center.length() * 2;
			
			  // send a fake mouse event to trigger the initial point
			  handleMouseMove({ clientX: center.x, clientY: center.y });
			}
		} 
		return false;
	});
});