import Image from "next/image";

export default function Home() {
return (
<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black text-black dark:text-white">
<title>{ "{{ $json.seo_title || 'POTransfora' }}" }</title>
<meta name="description" content={ "{{ $json.seo_description || 'Sovereign Protocol' }}" } />

);
}
