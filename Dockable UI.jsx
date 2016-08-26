var myPalette = buildUI(this); // Pass itself to the function buildUI

//In case not run dockable script -> Run as floating window as normal script
if (myPalette != null && myPalette instanceof Window) 
	{
		myPalette.show()
	}

function buildUI (thisObject) 
	{
		//In case not run dockable script -> Run as floating window as normal script
		if (thisObject instanceof Panel) 
				{
					var myWindow = thisObject;
				} 
			else 
				{ 
			    var myWindow = new Window ("palette", "My Window");
				}

			//alert( myWindow) ;
			
			//------------UI--------------------------
				myWindow.myPanel = myWindow.add("Panel"); //Panel have frame while group is not
				myWindow.myPanel.orientation = "row"; // orientation inside panel

				myWindow.myPanel.okButton = myWindow.myPanel.add("button");
				myWindow.myPanel.okButton.text = "OK";
				myWindow.myPanel.cancelButton = myWindow.myPanel.add("button");
				myWindow.myPanel.cancelButton.text = "Cancel";

			//These 2 line of code is for Dockable UI sript without it the button not gonna show up
				myWindow.layout.layout(true);
				myWindow.layout.resize();

			//------------Function--------------------------
				myWindow.myPanel.okButton.onClick = function () 
					{
						var myLayer = app.project.activeItem.layer(1);
						myLayer.position.setValue([0,0]);
						alert("OK");
						myWindow.close();
					}

				myWindow.myPanel.cancelButton.onClick = function () 
					{
						alert("Cancel");
						myWindow.close();
					}
		return myWindow;
	} //function buildUI () 
