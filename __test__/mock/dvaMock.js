import dva from 'dva';
const app = dva();
const testModel = {
    namespace: 'app',
    state: {
        dvaname: 'woder',
    }
}
app.model(testModel);
app.router(()=>{return <div></div>});
app.start();
console.log(app._store);
export default app._store;