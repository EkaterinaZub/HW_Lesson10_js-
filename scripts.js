{
    let Bulb = function (power, time) {

    this.power = power;
    this.electricity = 22; /*стоимость электроэнергии*/
    this.time = time || 0;


    this.on = function () {
        this.state = true;
        this.operation()
        this.show()
    }

    this.off = function () {
        this.state = false;
        return this.show()

    }


    this.operation = function () {
        if (this.state === true && this.time > 0) {
            this.result = (this.power / 1000 * this.electricity * this.time);
            console.log(`Стоимость электроэнергии за время работы лампочки ${this.result} руб.`)
        } else return console.log(`Лампочка  не включена`)
    }

    this.show = function () {
        if (this.state === true) {
            console.log(`Лампочка включена`)
        } else {
            console.log(`Лампочка  не включена`)
        }

    }

}


let bulb = new Bulb(300, 5000);
// bulb.operation()
// bulb.on()
// bulb.off()
console.log(bulb);


let Bulb2 = function (power, time, square) {
    Bulb.apply(this, arguments);
    let lightFlow = 150 * square;

    this.numberBulbs = function () {
        this.number = Math.round(lightFlow / power / 11.5);
        console.log(`количество лампочек ${this.number}, необходимо для освещения комнаты площадью ${square} м2 и мощностью ${power} Вт`);
    }


}

let bulb2 = new Bulb2(40, 5, 20);


bulb2.on()
bulb2.numberBulbs()
console.log(bulb2)

}

{

    
    let WorkDOM = function () {

        this.createTag = function (nameTag) {
            const tag = document.createElement(`${nameTag}`);
            document.body.prepend(tag)
            console.log(tag);
        }

        this.getTag = function (nameTag) {
            const gettag = document.querySelector(`${nameTag}`)
            console.log(gettag);

        }

        this.createAttr = function (nameAt, nameAttr, value) {
            const input = document.createElement(`${nameAt}`);
            document.body.prepend(input)
            input.setAttribute(`${nameAttr}`, `${value}`)
            console.log(input);
            const get = input.getAttribute(`${nameAttr}`)
            console.log(get);

        }

        this.createElement = function (elem) {
            const div = document.querySelector('div');
            const element = document.createElement(`${elem}`);
            element.innerHTML = "Hello";
            div.append(element);
            const el = document.querySelector(`${elem}`);

            console.log(element);
            console.log(el);
        }

        this.addClass =function(){
            const p = document.querySelector('p');
            p.classList.add('header');
            console.log(p);

        }
        this.removeClass =function(){
            const p = document.querySelector('p');
            p.classList.remove('container__header');
            console.log(p);

        }
        this.toggleClass =function(){
            const p = document.querySelector('p');
            p.classList.toggle('container__header');
            console.log(p);

        }

        this.hasClass = function(){
            const div = document.querySelector('div');
            const clas = div.classList.contains("container");
            console.log(clas);
        }

        this.append = function(){
            const div = document.querySelector('div');
            const h1 = document.createElement('h1');
            h1.innerHTML = "Hello World";
            h1.classList.add('headerH1')
            div.prepend(h1);

            console.log(h1);
        }

        this.on =function( ){
            const click = document.querySelector('.headerH1')
            console.log(click);
           
            click.addEventListener('mousemove', function(){
                this.style.backgroundColor = 'green';
                

            })
            click.addEventListener('mouseout', function(){
                this.style.backgroundColor = 'white';
               
            })



        }


    };
    // };

    let DOM = new WorkDOM()
    // console.log(DOM);
    DOM.createTag('span')
    DOM.getTag('span')
    DOM.createAttr('input', 'type', 'text')
    DOM.createElement('span')
    // DOM.addClass()
    // DOM.removeClass()
    // DOM.toggleClass()
    DOM.hasClass()
    DOM.append()
    DOM.on()

    



}