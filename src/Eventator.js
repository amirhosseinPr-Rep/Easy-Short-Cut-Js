export default class Eventator{
    constructor(Page)
    {
    this.Page=Page;
    }
    addEvent(shortcut,Event)
    {
        this.Page.addEventListener('keydown',(event)=>{
        let canEvent=false;
        if(!event["cancelable"])
            return;
        
          if(!shortcut.keys.map((item=>this.Eventer(item,event))).includes(false))
            {
                event.preventDefault();
                Event();
            }
         });
    }
    Eventer(item,event)
    {
        let keylist=["ctrlKey","shiftKey","altKey"];
        if(!event.key)
            return;
        if(keylist.includes(item))
            return event[item];
        else
            return item.toLocaleLowerCase() == event.key.toLocaleLowerCase(); 
           }
     
}
