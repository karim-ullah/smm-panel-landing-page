'use client'

import React, { useState } from 'react'
import { Button } from '../ui/button'
import Hexagon from '@/components/ui/hexagon'
import Fb from '@/assests/fb.png'
import Insta from '@/assests/insta.png'
import Linkedin from '@/assests/linkedin.png'
import Snap from '@/assests/snap.png'
import Spotify from '@/assests/spotify.png'
import Tiktok from '@/assests/tiktok.png'
import Tl from '@/assests/tl.png'
import Tube from '@/assests/tube.png'
import Website from '@/assests/website.png'
import X from '@/assests/x.png'
import Discord from '@/assests/discord.png'
import Sound from '@/assests/sound.png'
import {
  discordList,
  discordText,
  discordTitle,
  fbList,
  fbSrc,
  fbText,
  fbTitle,
  instagramList,
  instagramText,
  instagramTitle,
  linkedinList,
  linkedinText,
  linkedinTitle,
  snapchatList,
  snapchatText,
  snapchatTitle,
  soundCloudList,
  soundCloudText,
  soundCloudTitle,
  spotifyList,
  spotifyText,
  spotifyTitle,
  telegramList,
  telegramText,
  telegramTitle,
  tiktokList,
  tiktokText,
  tiktokTitle,
  twitterList,
  twitterText,
  twitterTitle,
  websiteTrafficList,
  websiteTrafficText,
  websiteTrafficTitle,
  youtubeList,
  youtubeText,
  youtubeTitle,
} from './servicetab/tabData'
import TabContent from './servicetab/tabContent'

const Services = () => {
  const [openFb, setOpenFb] = useState(true)
  const [openInstagram, setOpenInstagram] = useState(false)
  const [openTwitter, setOpenTwitter] = useState(false)
  const [openYoutube, setOpenYoutube] = useState(false)
  const [openTiktok, setOpenTiktok] = useState(false)
  const [openLinkedin, setOpenLinkedin] = useState(false)
  const [openTelegram, setOpenTelegram] = useState(false)
  const [openDiscord, setOpenDiscord] = useState(false)
  const [openSpotify, setOpenSpotify] = useState(false)
  const [openSoundCloud, setOpenSoundCloud] = useState(false)
  const [openSnapchat, setOpenSnapchat] = useState(false)
  const [openWebsiteTraffic, setOpenWebsiteTraffic] = useState(false)

  const showService = (service) => {
    setOpenFb(service === 'facebook')
    setOpenInstagram(service === 'instagram')
    setOpenTwitter(service === 'twitter')
    setOpenYoutube(service === 'youtube')
    setOpenTiktok(service === 'tiktok')
    setOpenLinkedin(service === 'linkedin')
    setOpenTelegram(service === 'telegram')
    setOpenDiscord(service === 'discord')
    setOpenSpotify(service === 'spotify')
    setOpenSoundCloud(service === 'soundcloud')
    setOpenSnapchat(service === 'snapchat')
    setOpenWebsiteTraffic(service === 'website-traffic')
  }

  return (
    <section className='py-16 bg-background'>
      <div className='container'>
        {/* Headings */}
        <div className='text-center'>
          <h4 className='w-fit uppercase border-b-3 border-border pb-1 mx-auto'>
            Our Services
          </h4>
          <h2 className='mt-4 mb-5'>
            Powerful <span className='text-primary'>SMM Services</span> for Fast
            Growth
          </h2>
          <p>
            Explore our comprehensive range of social media marketing services
            designed to help you grow your presence across all major <br />
            platforms. From Facebook to TikTok, we&apos;ve got you covered.
          </p>
        </div>

        {/* Buttons */}
        <div className='grid grid-cols-6 gap-6 mt-12'>
          <Button
            className='space-x-2'
            variant={openFb ? 'default' : 'secondary'}
            size='xs'
            aria-pressed={openFb}
            onClick={() => showService('facebook')}
          >
            <Hexagon src={Fb} /> <span>Facebook</span>
          </Button>
          <Button
            className='space-x-2'
            variant={openInstagram ? 'default' : 'secondary'}
            size='xs'
            aria-pressed={openInstagram}
            onClick={() => showService('instagram')}
          >
            <Hexagon src={Insta} /> <span>Instagram</span>
          </Button>
          <Button
            className='space-x-2'
            variant={openTwitter ? 'default' : 'secondary'}
            size='xs'
            aria-pressed={openTwitter}
            onClick={() => showService('twitter')}
          >
            <Hexagon src={X} /> <span>X (Twitter)</span>
          </Button>
          <Button
            className='space-x-2'
            variant={openYoutube ? 'default' : 'secondary'}
            size='xs'
            aria-pressed={openYoutube}
            onClick={() => showService('youtube')}
          >
            <Hexagon src={Tube} /> <span>YouTube</span>
          </Button>
          <Button
            className='space-x-2'
            variant={openTiktok ? 'default' : 'secondary'}
            size='xs'
            aria-pressed={openTiktok}
            onClick={() => showService('tiktok')}
          >
            <Hexagon src={Tiktok} /> <span>TikTok</span>
          </Button>
          <Button
            className='space-x-2'
            variant={openLinkedin ? 'default' : 'secondary'}
            size='xs'
            aria-pressed={openLinkedin}
            onClick={() => showService('linkedin')}
          >
            <Hexagon src={Linkedin} /> <span>LinkedIn</span>
          </Button>
          <Button
            className='space-x-2'
            variant={openTelegram ? 'default' : 'secondary'}
            size='xs'
            aria-pressed={openTelegram}
            onClick={() => showService('telegram')}
          >
            <Hexagon src={Tl} /> <span>Telegram</span>
          </Button>
          <Button
            className='space-x-2'
            variant={openDiscord ? 'default' : 'secondary'}
            size='xs'
            aria-pressed={openDiscord}
            onClick={() => showService('discord')}
          >
            <Hexagon src={Discord} /> <span>Discord</span>
          </Button>
          <Button
            className='space-x-2'
            variant={openSpotify ? 'default' : 'secondary'}
            size='xs'
            aria-pressed={openSpotify}
            onClick={() => showService('spotify')}
          >
            <Hexagon src={Spotify} /> <span>Spotify</span>
          </Button>
          <Button
            className='space-x-2'
            variant={openSoundCloud ? 'default' : 'secondary'}
            size='xs'
            aria-pressed={openSoundCloud}
            onClick={() => showService('soundcloud')}
          >
            <Hexagon src={Sound} /> <span>SoundCloud</span>
          </Button>
          <Button
            className='space-x-2'
            variant={openSnapchat ? 'default' : 'secondary'}
            size='xs'
            aria-pressed={openSnapchat}
            onClick={() => showService('snapchat')}
          >
            <Hexagon src={Snap} /> <span>Snapchat</span>
          </Button>
          <Button
            className='space-x-2'
            variant={openWebsiteTraffic ? 'default' : 'secondary'}
            size='xs'
            aria-pressed={openWebsiteTraffic}
            onClick={() => showService('website-traffic')}
          >
            <Hexagon src={Website} /> <span>Web Traffic</span>
          </Button>
        </div>

        {/* Service Box */}
        <div>
          {openFb && (
            <TabContent src={fbSrc} title={fbTitle} text={fbText} list={fbList} />
          )}
          {openInstagram && (
            <TabContent
              src={fbSrc}
              title={instagramTitle}
              text={instagramText}
              list={instagramList}
            />
          )}
          {openTwitter && (
            <TabContent
              src={fbSrc}
              title={twitterTitle}
              text={twitterText}
              list={twitterList}
            />
          )}
          {openYoutube && (
            <TabContent
              src={fbSrc}
              title={youtubeTitle}
              text={youtubeText}
              list={youtubeList}
            />
          )}
          {openTiktok && (
            <TabContent
              src={fbSrc}
              title={tiktokTitle}
              text={tiktokText}
              list={tiktokList}
            />
          )}
          {openLinkedin && (
            <TabContent
              src={fbSrc}
              title={linkedinTitle}
              text={linkedinText}
              list={linkedinList}
            />
          )}
          {openTelegram && (
            <TabContent
              src={fbSrc}
              title={telegramTitle}
              text={telegramText}
              list={telegramList}
            />
          )}
          {openDiscord && (
            <TabContent
              src={fbSrc}
              title={discordTitle}
              text={discordText}
              list={discordList}
            />
          )}
          {openSpotify && (
            <TabContent
              src={fbSrc}
              title={spotifyTitle}
              text={spotifyText}
              list={spotifyList}
            />
          )}
          {openSoundCloud && (
            <TabContent
              src={fbSrc}
              title={soundCloudTitle}
              text={soundCloudText}
              list={soundCloudList}
            />
          )}
          {openSnapchat && (
            <TabContent
              src={fbSrc}
              title={snapchatTitle}
              text={snapchatText}
              list={snapchatList}
            />
          )}
          {openWebsiteTraffic && (
            <TabContent
              src={fbSrc}
              title={websiteTrafficTitle}
              text={websiteTrafficText}
              list={websiteTrafficList}
            />
          )}
        </div>
      </div>
    </section>
  )
}

export default Services
