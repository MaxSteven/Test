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
				myWindow.myPanel = myWindow.add("panel"); //Panel have frame while group is not
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
						var file = new File('/E/Nguyen/Stuffs/AE Scipts/OftenUsed/___________TEST.jsx');
						            file.open("r");
						            eval( file.read() );
						            file.close();

						myWindow.close();
					}

				myWindow.myPanel.cancelButton.onClick = function () 
					{
						alert("Cancel");
						myWindow.close();
					}
		return myWindow;
	} //function buildUI () 
