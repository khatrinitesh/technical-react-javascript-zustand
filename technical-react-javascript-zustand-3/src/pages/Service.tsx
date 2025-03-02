import React from 'react';
import Banner from '../components/Banner';
import { useQuery } from '@tanstack/react-query';
import { PostProps } from '../interface';
import fetchPosts from '../service/apiPost';


const Service:React.FC<BannerProps> = ({bannerTitle,bannerDescription,bannerStyle}) => {

  const {data,error,isLoading,isError} = useQuery<PostProps[]>(['posts'],fetchPosts);

  if(!isLoading){
    return(
      <div>Loading...</div>
    )
  }
  if (isError) {
    return <div>Error: {error instanceof Error ? error.message : 'Unknown error'}</div>;
  }
  return (
    <div className='content'>
      <Banner bannerTitle="Service" bannerDescription="Ex veniam est culpa amet."/>
      <h1>Posts</h1>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Service;
