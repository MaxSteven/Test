var myPalette = buildUI(this);

if (myPalette != null && myPalette instanceof Window) 
  {
    myPalette.show()
  }

function buildUI (thisObject)
{

  if (thisObject instanceof Panel) 
    {
      var myWindow = thisObject;
    } else { 
      var myWindow = new Window ("palette", "My Window");
    }

    //alert( myWindow) ;


  myWindow.myPanel = myWindow.add("group");
  myWindow.myPanel.orientation = "column";
  myWindow.myPanel.okButton = myWindow.myPanel.add("button");
  myWindow.myPanel.okButton.text = "OK";
  myWindow.myPanel.cancelButton = myWindow.myPanel.add("button");
  myWindow.myPanel.cancelButton.text = "Cancel";

  myWindow.layout.layout(true);
  myWindow.layout.resize();

  myWindow.myPanel.okButton.onClick = function () {
    alert("OK");
    myWindow.close();
    }

  myWindow.myPanel.cancelButton.onClick = function () 
  {
              alert("同じ平面をまとめます。（色・サイズが一緒なもの）\nその後、使っていない平面と、「平面」という名前のフォルダを削除します。\n※アンドゥできます。");
              function ItemToAry(orgItem){
                ToAry  = new Array();
                ToAry[0] = new Array();
                ToAry[1] = new Array();
                ToAry[2] = new Array();
                ToAry[3] = new Array();
                ToAry[4] = new Array();
                
                for(ita_i=0;ita_i<orgItem.length;ita_i++){
                  //ToAry [0]->[footage]  [1]->[comp] [2]->[folder] [3]->[plane]  [4]->[other]
                  if(orgItem[ita_i].mainSource instanceof FileSource){
                    ToAry[0].push(orgItem[ita_i]);
                  }else if(orgItem[ita_i] instanceof CompItem){
                    ToAry[1].push(orgItem[ita_i]);
                  }else if(orgItem[ita_i] instanceof FolderItem){
                    ToAry[2].push(orgItem[ita_i]);
                  }else if(orgItem[ita_i].mainSource instanceof SolidSource){
                    ToAry[3].push(orgItem[ita_i]);
                  }else{
                    ToAry[4].push(orgItem[ita_i]);
                  }
                }
                return ToAry;
              }

            try{
            app.beginUndoGroup("平面をまとめる");
            var plane_folder = app.project.items.addFolder("平面");
              var plane_ary = new Array;
              for(i=1;i<=app.project.items.length;i++){
                  var item = app.project.items[i];
                  if(item.mainSource instanceof SolidSource){
                    //item.parentFolder = plane_folder;
                    plane_ary.push(item);
                  }
              }
              for(k=0;k<plane_ary.length;k++){
                plane_ary[k].parentFolder = plane_folder;
              }

            var tmp = new Array;
            for(i=1;i<=app.project.items.length;i++){tmp.push(app.project.items[i]);}
            var planes = ItemToAry(tmp)[3];

            //var del_solid = new Array;
            for(i=0;i<planes.length;i++){
              for(k=i;k<planes.length;k++){
              //  alert(planes[i].mainSource.color+"\n"+planes[i].mainSource.width+"\n"+planes[i].mainSource.height);
              //alert(planes[i].mainSource.color+"  A  "+planes[i].width+"  A  "+planes[i].height);
              if(planes[i].mainSource.color == planes[k].mainSource.color){alert("N");}
                if(k != i && planes[i].mainSource.color[0] == planes[k].mainSource.color[0] && planes[i].mainSource.color[1] == planes[k].mainSource.color[1] && planes[i].mainSource.color[2] == planes[k].mainSource.color[2] && planes[i].width == planes[k].width && planes[i].height == planes[k].height){
                  try{
                  for(ly=1;ly<=planes[k].usedIn[0].layers.length;ly++){
                    if(planes[k].usedIn[0].layers[ly].source == planes[k]){
                      try{
                      planes[k].usedIn[0].layers[ly].name = planes[k].usedIn[0].layers[ly].name; //名前からのエクスプレッション保持
                      planes[k].usedIn[0].layers[ly].replaceSource(planes[i],"");// = planes[i].mainSource;//del_solid.push(planes[k]);
                      }catch(er){}
                    }
                  }
                  //alert("A");
                  }catch(er){}
                }
              }
            }


                var flag = true;
                while(flag){
                  flag = false;
                  for(f=1;f<=app.project.items.length;f++){
                    if(app.project.items[f].mainSource instanceof SolidSource && app.project.items[f].usedIn.length==0){
                      app.project.items[f].remove();
                      flag=true;
                    }
                  }
                }


                var flag = true;
                while(flag){
                  flag = false;
                  for(f=1;f<=app.project.items.length;f++){
                    if(app.project.items[f]  instanceof FolderItem && app.project.items[f].items.length==0 && app.project.items[f].name == "平面"){
                      app.project.items[f].remove();
                      flag=true;
                    }
                  }
                }
            //alert("完了");
            app.endUndoGroup();
            //alert("SOLID->"+del_solid);
            /*for(i=0;i<del_solid.length;i++){
              del_solid[i].remove();
            }
            */
            }catch(errer){alert(errer);}
    }
return myWindow;
} //function buildUI () 
