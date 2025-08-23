'use client'
import IgForm from '@/app/components/IgForm'
import { useState, useEffect } from 'react'
import { ResourceInfo } from '@/types'
import { toCorsUrl } from '@/lib/utils'
import { Button } from '@/components/ui/button'
// import { ExternalLink } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

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
  useEffect(() => {
    if('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then(registration => {
        console.log('Service worker registered:', registration.scope)
      }).catch(err => {
        console.error('Service worker registration failed:', err)
      })
    }
  })




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
<Button
  variant="default"
  className="ml-auto mt-4"
  onClick={async() => {
try {
    // 1. Fetch the image data from the provided URL
    // The "cors" mode is used to allow cross-origin requests
    const response = await fetch(info.url, { mode: 'cors' });

    // 2. Check if the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // 3. Convert the response to a Blob
    // A Blob is a file-like object of immutable raw data
    const imageBlob = await response.blob();

    // 4. Create a temporary URL for the Blob
    // This URL is local to the browser and doesn't trigger CORS
    const imageObjectURL = URL.createObjectURL(imageBlob);

    // 5. Create a temporary <a> element for the download
    const link = document.createElement('a');
    link.href = imageObjectURL;

    // Set the download attribute with the desired file name
    link.download = "fileName.jpg";

    // 6. Append the link to the document body, trigger a click, and then remove it
    // This action simulates a user clicking a download link
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // 7. Revoke the temporary URL to free up memory
    // It's good practice to clean up after the download
    URL.revokeObjectURL(imageObjectURL);

    console.log('Image downloaded successfully!');
  } catch (error) {
    console.error('Error downloading the image:', error);
  }
  }}
>
  Download
</Button>

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
