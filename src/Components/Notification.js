import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
export default function ConfirmDialog({setConfirmDialog, confirmDialog}) {
    const navigate=useNavigate();
    return (
        <Dialog open={confirmDialog}>
            <DialogTitle >
                Your cart is empty!
            </DialogTitle>
            <DialogContent >
                <Typography>
                    Add items
                </Typography>
            </DialogContent>
            <DialogActions className='dialogBtm'>
                <Button
                    color="primary"
                    disabled={false}
                    variant="outlined"
                    onClick={() => setConfirmDialog(false)}>
                No</Button>
                <Button
                    value="Yes"
                    color="primary"
                    disabled={false}
                    variant="outlined"
                    onClick={()=>{setConfirmDialog(false); navigate('/bikes')}}>
                Yes</Button>
            </DialogActions>
        </Dialog>
    )
}