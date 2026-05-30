'use client'

import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('light')
  }, [setHeaderTheme])

  return (
    <section className="relative bg-[#F8F6F3] text-[#1E1E1E]">
      <div className="container grid min-h-[90vh] grid-cols-1 items-center gap-12 py-28 md:grid-cols-2">
        <div className="max-w-[42rem]">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-[#6F1D2B]">
            SMM & Content Creation
          </p>

          {richText && (
            <RichText
              className="mb-8 text-[#1E1E1E] [&_*]:text-[#1E1E1E] [&_h1]:text-6xl [&_h1]:font-normal [&_h1]:leading-[0.95] [&_p]:mt-6 [&_p]:max-w-md [&_p]:text-lg [&_p]:leading-8"
              data={richText}
              enableGutter={false}
            />
          )}

          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex flex-wrap gap-4">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink
                      {...link}
                      className={
                        i === 0
                          ? 'inline-flex rounded-none bg-[#6F1D2B] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#521520]'
                          : 'inline-flex rounded-none border border-[#6F1D2B] px-7 py-4 text-sm font-medium text-[#6F1D2B] transition hover:bg-[#6F1D2B] hover:text-white'
                      }
                    />
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        <div className="relative min-h-[520px] overflow-hidden bg-white">
          {media && typeof media === 'object' && (
            <Media fill imgClassName="object-cover" priority resource={media} rounded-md />
          )}
        </div>
      </div>
    </section>
  )
}
