class MyClass {
    #x = 10

    get x() {
        return this.#x
    }
}

console.log(new MyClass().x)
