import { useRouter } from 'next/router';
import { Card, Grid } from 'semantic-ui-react';

export default function Verify() {
  const router = useRouter();

  const { email } = router.query;
  return (
    <div className="h-screen darkestColor grid place-items-center">
        <div className="mb-96 max-w-sm darkColor rounded overflow-hidden shadow-3xl">
          <div className="px-6 py-4">
            <div class="font-bold text-xl text-center text-white mb-2">
              Please verify your email by clicking the link sent to: <br /><span></span>
              {email}.
            </div>
          </div>
      </div>
    </div>
  );
}

// <Grid textAlign='center' style={{ height: '102vh' }} verticalAlign='top'>
//             <Grid.Column style={{ maxWidth: 450 }}>
//                 <Card className='ui card'>
//                     <Card.Content>
//                         <Card.Header>
//                             Please verify your email by clicking the link sent to: <br /> {email}.
//                         </Card.Header>
//                     </Card.Content>
//                 </Card>
//             </Grid.Column>
//         </Grid>
