# tabmenu - simple tabs in html

tabmenu is a tiny jquery plugin that will turn a bit of html markup into tabs. It only takes care 
of the hide/show business, and even this is done solely through css classes so you retain full 
control over the look.

## Markup example

tabmenu works with the following markup :

```html
<div id="tabcontainer">
	<nav >
		<ul>
			<li>
				<a href="#tab1" class="ux-tab-label">
					tab 1
				</a>
			</li>
			<li>
				<a href="#tab2" class="ux-tab-label">
					tab 2
				</a>
			</li>
		</ul>
	</nav>
	<div id="tab1" class="ux-tab">
		Content of first tab
	</div>
	<div id="tab2" class="ux-tab">
		Content of second tab
	</div>
</div>
```

You can use whatever tags you like, except for the tab labels which have to be links (ie. __a__ element).

## Usage

```javascript
$(function(){
	$('#tabcontainer').tabmenu();
});
```

Simple.

## css classes

tabmenu doesn't directly hide/show anything, it just add and removes classes.

Tab that should be hidden get the class **hidden**, and the a tag that corresponds to the 
currently displayed tab gets an **active** class.

It's up to you to manage how the tabs should look like, how exactly you want to hide the tabs, 
etc.