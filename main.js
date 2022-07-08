import _ from 'lodash';


  async  function component() {
        const element = document.createElement('div');
        const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');
        const button = document.createElement('button');
        const br = document.createElement('br');

        button.innerHTML = 'Click me and look at the console!';
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        element.appendChild(br);
        element.appendChild(button);

        // Note that because a network request is involved, some indication
        // of loading would need to be shown in a production-level site/app.
        button.onclick = e => import(/* webpackChunkName: "print" */ './src/print').then(module => {
            const print = module.default;

            print();
        });

        return element;
    }

   async function component1() {
        const element = document.createElement('div');
        const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');
        const button = document.createElement('button');
        const br = document.createElement('br');

        button.innerHTML = 'A文件';
        element.innerHTML = _.join(['Hello', 'webpack'], 'A文件 ');
        element.appendChild(br);
        element.appendChild(button);

        // Note that because a network request is involved, some indication
        // of loading would need to be shown in a production-level site/app.
        button.onclick = e => import(/* webpackChunkName: "a" */ './src/a').then(module => {
            const print = module.default;

            print();
        });

        return element;
    }


 document.body.appendChild(component());
 document.body.appendChild(component1());
