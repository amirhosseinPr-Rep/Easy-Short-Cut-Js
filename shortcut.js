export default class Shortcut{
    
    constructor()
    {
        this.shortcutobject={};
    }
    setshortcut(keys)
    {
        this.shortcutobject["keys"]=keys;
        return this.shortcutobject;
    }

}
