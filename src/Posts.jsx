// Data.js using Material-UI
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';
import { ArcElement } from 'chart.js/auto';

const Data = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [userOnePostsCount, setUserOnePostsCount] = useState(0);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        const filtered = response.data.filter((post) => post.userId === 1);
        setPosts(response.data);
        setFilteredPosts(filtered);
        setUserOnePostsCount(filtered.length);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const chartData = {
    labels: ['User 1 Posts', 'Other Posts'],
    datasets: [
      {
        label: 'Posts by User ID 1',
        data: [userOnePostsCount, posts.length - userOnePostsCount],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };


  return (
    <div>
        <Typography variant='h3'>
      Data Page
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Body</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredPosts.map((post) => (
              <TableRow key={post.id}>
                <TableCell>{post.id}</TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.body}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{display: 'flex', flexFlow:'row-wrap', justifyContent:'center',alignItems:'center'}}>
      <div style={{ marginTop: '20px', width: '300px', height: '300px'  }}>
        <Typography variant='h4'>
        Pie Chart: Posts by User ID 1 vs Other Posts
        </Typography>
        <Doughnut data={chartData} />
      </div>
      </div>
    </div>
    
  );
};

export default Data;
