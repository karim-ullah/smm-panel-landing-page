import serviceImg from '@/assests/fbsrc.png'
import One from '@/assests/one.png'
import Two from '@/assests/two.png'
import Three from '@/assests/three.png'
import Four from '@/assests/four.png'
import Five from '@/assests/five.png'
import Six from '@/assests/six.png'
import Image from 'next/image'

const serviceIcons = [One, Two, Three, Four, Five, Six]

const createServiceList = (services) =>
  services.map(({ title, description }, index) => (
    <li className='flex items-center gap-2' key={title}>
      <Image
        src={serviceIcons[index]}
        width={40}
        height={40}
        alt=''
        aria-hidden='true'
      />
      <span>
        <span className='text-primary'>{title}:</span> {description}
      </span>
    </li>
  ))

// Facebook Data
export const fbSrc = serviceImg
export const fbTitle = 'Facebook Marketing Services'
export const fbText =
  'Strengthen your Facebook presence with services designed to improve visibility, engagement, and audience growth for pages, posts, videos, and communities.'
export const fbList = createServiceList([
  {
    title: 'Facebook Page Followers',
    description: 'Grow your page audience and build stronger social proof.',
  },
  {
    title: 'Facebook Post Reactions',
    description: 'Increase likes and other reactions on your published posts.',
  },
  {
    title: 'Facebook Video Views',
    description: 'Help your videos reach a wider audience and gain momentum.',
  },
  {
    title: 'Facebook Post Comments',
    description: 'Encourage visible conversation and activity around your content.',
  },
  {
    title: 'Facebook Live Views',
    description: 'Increase viewer activity while your live broadcast is running.',
  },
  {
    title: 'Facebook Group Members',
    description: 'Expand your community with steady group membership growth.',
  },
])

// Instagram Data
export const instagramSrc = serviceImg
export const instagramTitle = 'Instagram Marketing Services'
export const instagramText =
  'Build a stronger Instagram profile with growth services for posts, Reels, Stories, and the engagement signals that help your content stand out.'
export const instagramList = createServiceList([
  {
    title: 'Instagram Followers',
    description: 'Expand your audience and strengthen your profile credibility.',
  },
  {
    title: 'Instagram Post Likes',
    description: 'Add engagement to photo, carousel, and promotional posts.',
  },
  {
    title: 'Instagram Reels Views',
    description: 'Give short-form videos more visibility and viewing activity.',
  },
  {
    title: 'Instagram Story Views',
    description: 'Reach more viewers with your time-sensitive Story content.',
  },
  {
    title: 'Instagram Saves',
    description: 'Increase a valuable engagement signal on useful or inspiring posts.',
  },
  {
    title: 'Instagram Comments',
    description: 'Create more visible discussion beneath your published content.',
  },
])

// X (Twitter) Data
export const twitterSrc = serviceImg
export const twitterTitle = 'X (Twitter) Marketing Services'
export const twitterText =
  'Increase your visibility on X with audience and engagement services for profiles, posts, videos, polls, and campaign reach.'
export const twitterList = createServiceList([
  {
    title: 'X Followers',
    description: 'Grow your profile audience and reinforce account visibility.',
  },
  {
    title: 'X Post Likes',
    description: 'Increase engagement on announcements, threads, and updates.',
  },
  {
    title: 'X Reposts',
    description: 'Extend the potential reach of your posts across more timelines.',
  },
  {
    title: 'X Video Views',
    description: 'Add viewing activity to native video posts and campaign clips.',
  },
  {
    title: 'X Poll Votes',
    description: 'Encourage more participation in community and research polls.',
  },
  {
    title: 'X Impressions',
    description: 'Increase the number of times your content appears to users.',
  },
])

// TikTok Data
export const tiktokSrc = serviceImg
export const tiktokTitle = 'TikTok Marketing Services'
export const tiktokText =
  'Accelerate your TikTok growth with services that support video discovery, creator engagement, audience building, and live content.'
export const tiktokList = createServiceList([
  {
    title: 'TikTok Followers',
    description: 'Grow your creator or brand audience with steady profile activity.',
  },
  {
    title: 'TikTok Video Likes',
    description: 'Increase engagement on short-form videos and campaign content.',
  },
  {
    title: 'TikTok Video Views',
    description: 'Build viewing momentum for new and existing video posts.',
  },
  {
    title: 'TikTok Shares',
    description: 'Help your content circulate beyond its initial audience.',
  },
  {
    title: 'TikTok Comments',
    description: 'Add visible conversation and interaction to your videos.',
  },
  {
    title: 'TikTok Live Views',
    description: 'Increase viewer activity during live streams and product events.',
  },
])

// YouTube Data
export const youtubeSrc = serviceImg
export const youtubeTitle = 'YouTube Marketing Services'
export const youtubeText =
  'Support your YouTube channel with services for subscriber growth, video engagement, watch activity, and live-stream visibility.'
export const youtubeList = createServiceList([
  {
    title: 'YouTube Subscribers',
    description: 'Grow your channel audience and strengthen its public presence.',
  },
  {
    title: 'YouTube Video Views',
    description: 'Increase viewing activity on long-form videos and Shorts.',
  },
  {
    title: 'YouTube Likes',
    description: 'Add positive engagement to published videos and Shorts.',
  },
  {
    title: 'YouTube Comments',
    description: 'Encourage visible discussion beneath your video content.',
  },
  {
    title: 'YouTube Watch Hours',
    description: 'Build watch-time activity across eligible long-form content.',
  },
  {
    title: 'YouTube Live Views',
    description: 'Increase audience activity during live broadcasts and premieres.',
  },
])

// LinkedIn Data
export const linkedinSrc = serviceImg
export const linkedinTitle = 'LinkedIn Marketing Services'
export const linkedinText =
  'Improve your professional reach with LinkedIn services for company pages, thought-leadership posts, videos, and business-focused engagement.'
export const linkedinList = createServiceList([
  {
    title: 'LinkedIn Page Followers',
    description: 'Expand the audience for your company or showcase page.',
  },
  {
    title: 'LinkedIn Post Reactions',
    description: 'Increase engagement on company news and professional updates.',
  },
  {
    title: 'LinkedIn Post Views',
    description: 'Improve visibility for articles, announcements, and campaigns.',
  },
  {
    title: 'LinkedIn Video Views',
    description: 'Reach more professionals with native video content.',
  },
  {
    title: 'LinkedIn Comments',
    description: 'Encourage discussion around insights and industry content.',
  },
  {
    title: 'LinkedIn Shares',
    description: 'Extend your posts into more professional networks.',
  },
])

// Telegram Data
export const telegramSrc = serviceImg
export const telegramTitle = 'Telegram Marketing Services'
export const telegramText =
  'Grow your Telegram presence with services for channels, groups, posts, reactions, polls, and community participation.'
export const telegramList = createServiceList([
  {
    title: 'Telegram Channel Members',
    description: 'Expand your channel audience and improve its visible reach.',
  },
  {
    title: 'Telegram Post Views',
    description: 'Increase view counts on announcements and channel updates.',
  },
  {
    title: 'Telegram Reactions',
    description: 'Add engagement signals to posts shared with your audience.',
  },
  {
    title: 'Telegram Poll Votes',
    description: 'Increase participation in feedback and community polls.',
  },
  {
    title: 'Telegram Group Members',
    description: 'Build a larger audience for public or private communities.',
  },
  {
    title: 'Telegram Post Comments',
    description: 'Encourage more discussion on comment-enabled channel posts.',
  },
])

// Discord Data
export const discordSrc = serviceImg
export const discordTitle = 'Discord Marketing Services'
export const discordText =
  'Develop a more active Discord community with services that support server growth, member activity, reactions, events, and visibility.'
export const discordList = createServiceList([
  {
    title: 'Discord Server Members',
    description: 'Grow your server population and improve community visibility.',
  },
  {
    title: 'Discord Online Members',
    description: 'Increase the visible number of active members in your server.',
  },
  {
    title: 'Discord Message Activity',
    description: 'Create more visible conversation across selected channels.',
  },
  {
    title: 'Discord Message Reactions',
    description: 'Add emoji engagement to announcements and community posts.',
  },
  {
    title: 'Discord Event Attendance',
    description: 'Increase interest around scheduled community events.',
  },
  {
    title: 'Discord Server Boosts',
    description: 'Unlock additional server features and improve presentation.',
  },
])

// Spotify Data
export const spotifySrc = serviceImg
export const spotifyTitle = 'Spotify Marketing Services'
export const spotifyText =
  'Promote your music or podcast on Spotify with services for plays, listeners, followers, saves, and playlist growth.'
export const spotifyList = createServiceList([
  {
    title: 'Spotify Followers',
    description: 'Grow the audience following your artist or creator profile.',
  },
  {
    title: 'Spotify Track Plays',
    description: 'Increase listening activity on singles, albums, and releases.',
  },
  {
    title: 'Spotify Monthly Listeners',
    description: 'Expand the visible reach of your artist profile over time.',
  },
  {
    title: 'Spotify Playlist Followers',
    description: 'Build an audience for curated and branded playlists.',
  },
  {
    title: 'Spotify Track Saves',
    description: 'Increase saves on songs listeners may want to revisit.',
  },
  {
    title: 'Spotify Podcast Plays',
    description: 'Add listening activity to podcast episodes and series.',
  },
])

// SoundCloud Data
export const soundCloudSrc = serviceImg
export const soundCloudTitle = 'SoundCloud Marketing Services'
export const soundCloudText =
  'Increase your SoundCloud reach with services for track discovery, listener activity, followers, engagement, and playlist promotion.'
export const soundCloudList = createServiceList([
  {
    title: 'SoundCloud Track Plays',
    description: 'Increase listening activity on tracks, mixes, and releases.',
  },
  {
    title: 'SoundCloud Followers',
    description: 'Grow the audience connected to your artist profile.',
  },
  {
    title: 'SoundCloud Likes',
    description: 'Add positive engagement to your published tracks.',
  },
  {
    title: 'SoundCloud Reposts',
    description: 'Extend your music into more listeners’ activity feeds.',
  },
  {
    title: 'SoundCloud Comments',
    description: 'Encourage feedback and conversation on your audio content.',
  },
  {
    title: 'SoundCloud Playlist Plays',
    description: 'Increase listening activity across curated track collections.',
  },
])

// Snapchat Data
export const snapchatSrc = serviceImg
export const snapchatTitle = 'Snapchat Marketing Services'
export const snapchatText =
  'Grow your Snapchat visibility with services for public profiles, Stories, Spotlight content, sharing, and audience engagement.'
export const snapchatList = createServiceList([
  {
    title: 'Snapchat Followers',
    description: 'Expand the audience following your public profile.',
  },
  {
    title: 'Snapchat Story Views',
    description: 'Increase viewing activity on brand and creator Stories.',
  },
  {
    title: 'Snapchat Spotlight Views',
    description: 'Build visibility for short-form Spotlight videos.',
  },
  {
    title: 'Snapchat Spotlight Favorites',
    description: 'Add positive engagement to your Spotlight content.',
  },
  {
    title: 'Snapchat Shares',
    description: 'Encourage wider distribution of Stories and Spotlight posts.',
  },
  {
    title: 'Snapchat Profile Views',
    description: 'Increase visits and discovery for your public profile.',
  },
])

// Website Traffic Data
export const websiteTrafficSrc = serviceImg
export const websiteTrafficTitle = 'Website Traffic Services'
export const websiteTrafficText =
  'Increase website visibility with flexible traffic campaigns for landing pages, stores, blogs, and other digital properties.'
export const websiteTrafficList = createServiceList([
  {
    title: 'Direct Website Traffic',
    description: 'Send visitors directly to a selected page or campaign URL.',
  },
  {
    title: 'Referral Traffic',
    description: 'Build visits attributed to relevant external referral sources.',
  },
  {
    title: 'Social Traffic',
    description: 'Drive visits from social media and content-sharing channels.',
  },
  {
    title: 'Geo-Targeted Traffic',
    description: 'Focus website visits on selected countries or regions.',
  },
  {
    title: 'Mobile Traffic',
    description: 'Reach mobile visitors across smartphones and tablets.',
  },
  {
    title: 'Page Views',
    description: 'Increase viewing activity on product, article, or landing pages.',
  },
])
