/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useNfts } from '../hooks';
import { getNfts } from '../utils';

const Home: NextPage = () => {
  const [walletAddress, setWalletAddress] = useState(
    '0xe4bBCbFf51e61D0D95FcC5016609aC8354B177C4'
  );

  const { nfts, loading, error } = useNfts(walletAddress);

  useEffect(() => {
    (async () => {
      const { nfts } = await getNfts(walletAddress);
      console.log({ nfts });
    })();
  }, [walletAddress]);

  return (
    <div className='p-10 flex flex-col items-center'>
      <h1 className='text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-6xl mb-4"'>
        NFT Viewer
      </h1>
      <h3 className='text-zinc-700'>
        Powered by{' '}
        <a
          href='https://www.ankr.com/advanced-api/'
          target='_blank'
          rel='noreferrer'
          className='cursor-pointer underline'
        >
          Ankr Advanced APIs
        </a>
      </h3>

      <div className='flex-left flex-col mt-4'>
        <label className='text-zinc-700 text-2xl font-extrabold' htmlFor='wallet-address'>
         &nbsp; Wallet address: &nbsp;
        </label>
        <input
          id='wallet-address'
          type='text'
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          className='rounded p-3 w-[425px] border'
          placeholder='Enter a wallet address here to view NFTs'
        />
      </div>

      {loading && (
        <div className='flex flex-col items-center mt-8'>
          <p className='text-zinc-700'>Loading...</p>
        </div>
      )}

      <div className='grid grid-cols-4 mt-8 gap-4'>
        {nfts.map((nft) => {
          return (
            <div
              key={`${nft.contractAddress}/${nft.tokenId}`}
              className='flex flex-col rounded border p-4'
            >
              <img
                className='w-[200px] h-[200px] rounded shadow'
                src={nft.imageUrl}
                alt={nft.name}
              />
              <span className='font-bold mt-8'>{nft.name}</span>
              <span>{nft.collectionName}</span>
            </div>
          );
        })}

        {error && (
          <div className='flex flex-col items-center mt-8'>
            <p className='text-red-700'>
              Error: {JSON.stringify(error, null, 2)}
            </p>
          </div>
        )}
      </div>
      <footer className="flex flex-col gap-2 mt-6 items-center">
        <a href="https://links.theekrystallee.com" target="blank" className="text-base text-gray-600 hover:text-gray-900">
          made with &#10084; by krystal
        </a>
        <div className="flex justify-center gap-2 mt-2 items-center">
          <a href="https://twitter.com/theekrystallee" target="blank" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Twitter</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a href="https://github.com/theekrystallee" target="blank" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">GitHub</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </a>
          <a href="https://tiktok.com/@theekrystallee" target="blank" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">tiktok</span>
            <svg 
            className="h-6 w-6"
            fill="currentColor" 
            viewBox="0 0 17 17"
            >
              <path 
              fillRule="evenodd"
              d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" 
              clipRule="evenodd"
              />
            </svg>
          </a>
          </div>
      </footer>
    </div>
  );
};

export default Home;