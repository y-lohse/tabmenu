# tabmenu - simple tabs in html

tabmenu is a tiny jquery plugin that will turn a bit of html markup into tabs. It only takes care 
of the hide/show business, and even this is done solely through css classes so you retain full 
control over how things are displayed.

## Markup example

tabmenu works with the following markup :

```html
<div>
	<nav class="ui-tabmenu">
		<!-- optionnal list, but only a tags matter-->
		<ul>
			<li>
				<a href="#tab1">
					tab 1
				</a>
			</li>
			<li>
				<a href="#tab2">
					tab 2
				</a>
			</li>
		</ul>
	</nav>
	<div id="tab1" class="ui-tab">
		Content of first tab
	</div>
	<div id="tab2" class="ui-tab">
		Content of second tab
	</div>
</div>
```

## css classes

tabmenu doesn't directly hide/show anything, it just add and removes classes.

Tab that should be hidden get the class __visuallyhidden__, and the a tag that corresponds to the 
currently displayed tab gets an __active__ class.

It's up to you to manage how the tab buttons should look like, how exactly you want to hide the tabs, 
etc.