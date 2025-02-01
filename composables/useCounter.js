export const useCounter = () => {
    const count = useState('counter', () => 0)

    const increment = () => {
        count.value++
    const images = useState('images', () => [])

    const increment = () => {
        count.value++
        images.value.push(`/assets/image${count.value}.png`)
    }

    const decrement = () => {
        if (count.value > 0) {
            images.value.pop()
            count.value--
        }
    }

    return {
        count,
        images,
        increment,
        decrement
    }
    }

    const decrement = () => {
        count.value--
    }

    return {
        count,
        increment,
        decrement
    }
}