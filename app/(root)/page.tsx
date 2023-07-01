import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
    return (
        <div className="flex h-[400px] flex-col items-center justify-between p-24">
            <div className="flex flex-col items-center justify-center font-extrabold text-2xl ">Hello App</div>
            <p className="text-center">NextJS 13 Boilerplate by <span className='font-semibold'>Ravi S Singh</span></p>
            <Button>Click Me</Button>
        </div>
    )
}
