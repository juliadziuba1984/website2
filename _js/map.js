




/*--------------------------Map-------------------------------------*/
function map(coords1,coords2,id){
	function initialize_contact_map() {
		var map, marker;		
		var image = {
		url: '_i/icons/icon_map_big.png'}

		var addr1 = new google.maps.LatLng(coords1, coords2);		
		var styles = [
	{
		"featureType": "landscape",
		"stylers": [
			{
				"hue": "#FF0000"
			},
			{
				"saturation": -100
			},
			{
				"lightness": 44
			},
			{
				"gamma": 1
			}
		]
	},
	{
		"featureType": "road.highway",
		"stylers": [
			{
				"hue": "#FF0000"
			},
			{
				"saturation": -100
			},
			{
				"lightness": 61.39999999999998
			},
			{
				"gamma": 1
			}
		]
	},
	{
		"featureType": "road.arterial",
		"stylers": [
			{
				"hue": "#FF0300"
			},
			{
				"saturation": -100
			},
			{
				"lightness": 51.19999999999999
			},
			{
				"gamma": 1
			}
		]
	},
	{
		"featureType": "road.local",
		"stylers": [
			{
				"hue": "#FF0300"
			},
			{
				"saturation": -100
			},
			{
				"lightness": 52
			},
			{
				"gamma": 1
			}
		]
	},
	{
		"featureType": "water",
		"stylers": [
			{
				"hue": "#0078FF"
			},
			{
				"saturation": 0
			},
			{
				"lightness": 0
			},
			{
				"gamma": 1
			}
		]
	},
	{
		"featureType": "poi",
		"stylers": [
			{
				"hue": "#FF0300"
			},
			{
				"saturation": -100
			},
			{
				"lightness": 52
			},
			{
				"gamma": 1
			}
		]
	}
];
    var center = new google.maps.LatLng(coords1, coords2);
	var mapOptions = {
         zoom: 11,
		 styles:styles,
         center: center,
		 scrollwheel: false,
         streetViewControl: false,
		 mapTypeControl: false,
		 panControl: true,
		  panControlOptions: {
		  position: google.maps.ControlPosition.LEFT_CENTER
		},
		zoomControl: true,
		zoomControlOptions: {
		  style: google.maps.ZoomControlStyle.LARGE,
		  position: google.maps.ControlPosition.LEFT_BOTTOM
		}
		 /*,panControl: false,
		  disableDefaultUI: true
		  */
	}
    map = new google.maps.Map(document.getElementById(id), mapOptions);
    map.setOptions({styles: styles});
    marker = new google.maps.Marker({
        map: map,
        position: addr1,
        visible: true,
		icon:image
    });
}
google.maps.event.addDomListener(window, 'load', initialize_contact_map);
}















function ImageMap(id){
	
	function initialize_contact_map() {
		var map, marker;
		var image = {
			url: '_i/icons/icon_map_small.png'
		}	
		var image2 = {
			url: '_i/icons/icon_map_big.png'
		}	
		
		var styles = [
			  {
				"featureType": "administrative",
				"elementType": "geometry.fill",
				"stylers": [{ "visibility": "off" }]
			},

			{
				"featureType": "landscape",
				"stylers": [
					{
						"hue": "#007FFF"
					},
					{
						"saturation": 0
					},
					{
						"lightness": 1
					},
					{
						"gamma": 1
					}
				]
			},
			{
				"featureType": "water",
				"stylers": [
					{
						"hue": "#00A4FF"
					},
					{
						"saturation": -67.19999999999999
					},
					{
						"lightness": -35.599999999999994
					},
					{
						"gamma": 1
					}
				]
			},
			{
				"featureType": "all",
				"elementType": "labels",
			   "stylers": [
				  { "visibility": "off" }
				]
			  }
		];
		

    var center = new google.maps.LatLng(62.618113, 113.916271);
	var mapOptions = {
         zoom: 3,
         center: center,
		 scrollwheel:false,
         streetViewControl: false,
		 mapTypeControl: false,
		 panControl: true,
		  panControlOptions: {
		  position: google.maps.ControlPosition.LEFT_CENTER
		},
		zoomControl: false,
		zoomControlOptions: {
		  style: google.maps.ZoomControlStyle.LARGE,
		  position: google.maps.ControlPosition.LEFT_CENTER
		}
		 /*,panControl: false,
		  disableDefaultUI: true
		  */
	}
	
	map = new google.maps.Map(document.getElementById(id), mapOptions);
    map.setOptions({styles: styles,minZoom: 3, maxZoom:3});

	var coords = [
        [55.758347, 37.700975, 'Москва'],     
        [40.266313, 47.462996 , 'Азербайджан'],
        [41.959211, 65.692103,'Узбекистан' ],
		[57.169561, 65.515045 , 'Тюмень'],
        [49.275619, 67.072069,'Казахстан' ],
		[38.031414, 55.56371,'Туркменистан' ]
    ];
	
/*add markers and clusters on the map*/
	var markers = [];
	var marker = [];
	var infobox = [];
	var closeBtn = "_i/btn_infobox_close.png";
	for (var i = 0; i < coords.length; i++) {
		marker[i] = new google.maps.Marker({
			position: new google.maps.LatLng (coords[i][0], coords[i][1]),
			map: map,
			icon: image,
			label:' '
		});
		markers.push(marker[i]);
		
		infobox[i] = new InfoBox({
			content: coords[i][2],
			boxClass:'infoBox infobox_'+i,
			pixelOffset: new google.maps.Size(-80, 0),
			closeBoxURL: closeBtn
    	});
		
		google.maps.event.addListener(marker[i], 'click', (function(marker, i) {												
			return function() {
				
				for (var j = 0; j < markers.length; j++) {
				  markers[j].setIcon("_i/icons/icon_map_small.png");
				}
				
				this.setIcon(image2);
				var id = i+1;
				$('.map_view_block .block_contacts_1 .block').css('display', 'none');
				$('.map_view_block .block_contacts_1 .block').removeClass('active');	
			 	$('.map_view_block .block_contacts_1 .block[data-city='+id+']').css('display', 'inline-block');
				$('.map_view_block .block_contacts_1 .block').removeClass('active');
				$('.map_view_block .block_contacts_1 .block[data-city='+id+']').addClass('active');	
				$('body').scrollTo('#block_contacts_1', {duration:'slow'});

				$('.list_view_block .block_contacts_1 .block').removeClass('active');	
				$('.list_view_block .block_contacts_1 .block').removeClass('active');
				$('.list_view_block .block_contacts_1 .block[data-city='+id+']').addClass('active');	
				
				
			}
  		})
		(marker[i], i));
		
		infobox[i].open(map,marker[i]);

		google.maps.event.addListener(marker[i], 'mouseover', (function(marker, i)  {
			return function() {
			this.setOpacity(.7);
			//this.setAnimation(google.maps.Animation.BOUNCE);

			}
		})
		(marker[i], i));
		
		google.maps.event.addListener(marker[i], 'mouseout', function() {
			this.setOpacity(1);
		});
		
	} 
/*end add markers and clusters on the map*/	

	if(map.getZoom()<=3){
		//map.setOptions({draggable: false});
	}	
	map_instances.push({
		'map': map,
		'center': center
	});

}
google.maps.event.addDomListener(window, 'load', initialize_contact_map);

}
