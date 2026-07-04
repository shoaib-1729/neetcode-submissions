class MyHashSet {
    // isko kehte hai: Direct Addressing
    // keys ko index ki tarah store karege
    // agar element present hai toh true nahi hai toh false store karege
    constructor() {
        this.arr = new Array(1000001).fill(false);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        // kuch return nahi karega (null)
        this.arr[key] = true
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
         // kuch return nahi karega (null)
        this.arr[key] = false
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        // boolean return karega (true ya false)
        return this.arr[key]
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
