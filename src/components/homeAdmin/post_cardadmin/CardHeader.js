import React, { useEffect } from 'react'

import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import { GLOBALTYPES } from '../../../redux/actions/globalTypes'
import { deletePostadmin } from '../../../redux/actions/postadminAction'

import { BASE_URL } from '../../../utils/config'
import { useTranslation } from 'react-i18next'


const CardHeader = ({ post }) => {
    const { auth, socket } = useSelector(state => state)
    const { languagee } = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch()

    const history = useHistory()

    const handleEditPost = () => {
        dispatch({ type: GLOBALTYPES.STATUSADMIN, payload: { ...post, onEdit: true } })
    }

    const handleDeletePost = () => {
        if (window.confirm("Voulez-vous vraiment supprimer ce post ?")) {
            dispatch(deletePostadmin({ post, auth, socket }))
            return history.push("/")
        }
    }

    const handleCopyLink = () => {
        navigator.clipboard.writeText(`${BASE_URL}/post/${post._id}`)
    }


    useEffect(() => {
        moment.locale(languagee.language); // Configura Moment.js con el idioma deseado
    }, [languagee.language]);

    // Genera la cadena de tiempo relativo
    const relativeTime = moment(post.createdAt).fromNow()



    return (
        <div className="card_header">
            <div className="d-flex">

                <div className="card_name">

                    <small className="text-muted">
                        {t('relativeTime', { count: relativeTime })} {/* Puedes pasar {{count}} como argumento */}
                    </small>




                </div>
            </div>

            <div className="nav-item dropdown">
                <span className="material-icons" id="moreLink" data-toggle="dropdown">
                    more_horiz
                </span>


                <div className="dropdown-menu">
                    {
                        auth.user._id === post.user._id &&
                        <>
                            <div className="dropdown-item" onClick={handleEditPost}>
                                <span className="material-icons">create</span> Edite Post admin
                            </div>
                            <div className="dropdown-item" onClick={handleDeletePost} >
                                <span className="material-icons">delete_outline</span> Suprimer Post admin
                            </div>
                        </>
                    }

                    <div className="dropdown-item" onClick={handleCopyLink}>
                        <span className="material-icons">content_copy</span> Copy le lien admin
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardHeader
