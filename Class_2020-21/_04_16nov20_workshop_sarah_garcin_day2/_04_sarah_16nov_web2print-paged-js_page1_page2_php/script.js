class interfaceButton extends Paged.Handler{
	constructor(chunker, polisher, caller){
		super(chunker, polisher, caller);
	}
	afterRendered(pages){
		var button = document.createElement('div');
		button.classList.add("screen-button");
		button.innerHTML = "<a href='web.php'>Voir la version web</a>";
		document.body.appendChild(button);
	}
}

Paged.registerHandlers(interfaceButton);



