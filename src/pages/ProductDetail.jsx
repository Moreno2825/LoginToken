import React from 'react';
import { useSelector } from 'react-redux';
import { selectSession } from '../features/slices/session_slices';
// import ImagePreviewInput from '../components/imageInputs/ImagePreviewInput';

const ProductDetail = () => {
    const [values, setValues] = useState({
        images: []
    });
    const session = useSelector(selectSession)
    const updatePictures = (pictures) => setValues({ ...values, images: pictures });
    return (
        <div>
            {/* <ImagePreviewInput 
                multiple
                accept = '.png, .jpeg, .jpg'
                maxFiles={4}
                updateFilesCb = {updatePictures}
            /> */}
        </div>
    );
}

export default ProductDetail;
