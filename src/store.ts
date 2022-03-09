export default class Store{
    public static sm_set(key:string, value:any) {
        let store : any = Store.sm_getStore();
        store[key] = value;
    }

    public static sm_get(key:string):any {
        let store : any = Store.sm_getStore();
        // console.log('store.ts: ' + store);
        // console.log('store.ts: ' + store[key]);
        if (store[key]) {
            //console.log('store.tsx: return:' + store[key]);
            return store[key];
        } else {
            return undefined;
        }
    }

    public static sm_getStore():any{
        //@ts-ignore
        //@ts-ignore
        if(!window.$junseok){
        //@ts-ignore
        window.$junseok ={};
            
        }
        //@ts-ignore
        return window.$junseok;

    }


}