'use client'
import IgForm from '@/app/components/IgForm'
import { useState, useEffect } from 'react'
import { ResourceInfo } from '@/types'
import { toCorsUrl } from '@/lib/utils'
import { Button } from '@/components/ui/button'
// import { ExternalLink } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { useIsMobile } from '@/hooks/use-is-mobile'

// function Save(props: { href: string }) {
//   const [isLoading, setIsLoading] = useState(false)
//   const { toast } = useToast()
//   const download = async () => {
//     try {
//       setIsLoading(true)
//       await downloadVideo(props.href, `instagram-${new Date().toLocaleString('en-US')}`)
//     } catch (error) {
//       console.error(error)
//       toast({
//         title: 'Error',
//         description: 'An Error occurred while downloading',
//         duration: 1500
//       })
//     } finally { 
//       setIsLoading(false)
//     }
//   }
//   return (
//     <Button
//       variant="outline"
//       className='mt-2'
//       size="sm"
//       onClick={download}
//       disabled={isLoading}
//     >
//       {isLoading && <Loader2 className="animate-spin" />}
//       Click To Save
//     </Button>
//   )
// }

export default function Content() {
            const isMobile = useIsMobile(); // ✅ call hook here, top-level
  useEffect(() => {
    if('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then(registration => {
        console.log('Service worker registered:', registration.scope)
      }).catch(err => {
        console.error('Service worker registration failed:', err)
      })
    }
  })

// const downloadImage = async (url) => {
//   try {
//     const response = await fetch(url, { mode: "cors" });
//     const blob = await response.blob();
//     const blobUrl = URL.createObjectURL(blob);

//     const link = document.createElement("a");
//     link.href = blobUrl;
//     link.download = url.split("/").pop() || "image.jpg"; // use last part of URL as filename
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);

//     URL.revokeObjectURL(blobUrl);
//   } catch (error) {
//     console.error("Download failed", error);
//   }
// };


  const [resourceInfo, setResourceInfo] = useState<ResourceInfo[]>([])
  const { toast } = useToast()

  const copyLinkToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(location.href)
      toast({
        description: 'Download Link has been copied to clipboard',
        duration: 1500
      })
    } catch {
      toast({
        title: 'Error',
        description: 'Please allow clipboard access.',
        duration: 1500
      })
    }
  }

  return (
    <>
      <IgForm onGetData={setResourceInfo} />
      <div className="flex flex-col  gap-y-4 mt-8">
        {resourceInfo.length > 0 && (
          <Button
            variant="ghost"
            className="ml-auto"
            size="icon"
            onClick={() => copyLinkToClipboard()}
          >
            {/* <ExternalLink /> */}
          </Button>
        )}
        {resourceInfo.map((info, i) => {
          if (info.type === 'Image') {
            return (
              <div key={info.url}>
                <img
                  key={i}
                  src={toCorsUrl(info.url)}
                  className="object-contain w-full h-[400px]"
                  alt=""
                />
                {isMobile ? <p className="text-white mb-4">Press and hold on image to save in your gallery</p> : <p className="text-white mb-4">Right click on image to save in your PC</p>}

              </div>
            )
          } else if (info.type === 'Video') {
           window.open(info.url, "_blank", "noopener,noreferrer");
  return null;
          }
        })}
      </div>
    </>
  )
}
