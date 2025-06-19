class CustomArray{
    constructor(){
        this.data = {};
        this.length = 0;
    }

    //Access
    get(index){
        return this.data[index]
    }

    //Update
    set(index, value){
        if(index < this.length){
            this.data[index] = value;
        }
    }

    //Insert at end
    push(value){
        this.data[this.length] = value;
        this.length ++;
    }

    //Insert at beginning
    unshift(value){
        for(let i = this.length; i > 0; i --){
            this.data[i] = this.data[i - 1]
        }
        this.data[0] = value;
        this.length ++;
    }

    //Delete at end
    pop(){
        if(this.length === 0) return undefined;
        const last = this.data[this.length - 1];
        delete this.data[this.length -1];
        this.length --;
        return last;
    }

    //Delete at beginning
    shift(){
        if(this.length === 0) return undefined;
        const first = this.data[0];
        for(let i = 0; i < this.length -1 ; i++){
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length --;
        return first;
    }

    //Linear search
    indexof(value){
        for(let i = 0; i < this.length; i++){
            if(this.data[i] === value) return i;
        }
        return -1;
    }
}