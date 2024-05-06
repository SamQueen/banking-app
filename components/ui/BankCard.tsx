import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { formatAmount } from '@/lib/utils'

const BankCard = ({ account, userName, showBalance = false} : CreditCardProps) => {
  return (
    <div className="flex flex-col">
        <Link href="/" className='bank-card'>
            <div className="bank-card_content">
                <div>
                    <h1 className="text-16 font-semibold text-white">
                        {userName}
                    </h1>

                    <p className="font-ibm-plex-serif font-black text-white">
                        {formatAmount(12)}
                    </p>
                </div>

                <article className="flex flex-col gap-2">
                    <div className="flex justify-between">
                        <h1 className='text-12 font-semibold text-white'>
                            {userName}
                        </h1>

                        <h1 className='text-12 font-semibold text-white'>
                            ●● / ●●
                        </h1>
                    </div>

                    <p className="text-14 font-semibold tracking-[1.1px] text-white">
                        ●●●● ●●●● ●●●● 
                        <span className='text-16'> 1234</span>
                    </p>
                </article>
            </div>

            <div className="bank-card_icon">
                <Image
                    src="/icons/Paypass.svg"
                    width={20}
                    height={24}
                    alt="card image"
                />
                <Image 
                    src="/icons/mastercard.svg"
                    width={45}
                    height={32}
                    alt="master card"
                    className='ml-5'
                />
            </div>

            <Image
                src="/icons/lines.svg"
                width={316}
                height={190}
                alt="lines"
                className='absolute top-0 left-0'
            />

        </Link>

        {/* COPY */}
    </div>
  )
}

export default BankCard