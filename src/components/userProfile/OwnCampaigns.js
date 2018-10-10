import React from 'react'
import { Line } from 'rc-progress'
import Rocket from '../../assets/cometa.png'
import Flag from '../../assets/bandera.png'
import { FlatButton } from 'material-ui/'
import moment from 'moment'

export const OwnCampaigns = ({ fakeFunds, percentage, getDate }) => {
    return <div>
        {
            fakeFunds.map((campaign, index) => {

                return <div key={index} className="campaign-card">
                    <div className="left">
                        <div style={{ margin: '5px' }}>
                            <img src={campaign.image} alt="Campaign" className="img-camp" />
                        </div>
                    </div>
                    <div className="right">
                        <h2>{campaign.name}</h2>
                        <div className="user-box">
                            <div className="img-user">
                                <img src={campaign.ownerPicture} alt="Owner" className="img-ownwer" />
                            </div>
                            <div className="info-user" style={{ margin: 'auto' }}>
                                <i><i className="fas fa-map-marker-alt" style={{ color: '#3E84FF' }}></i> {campaign.location.city}, {campaign.location.country}. {" "}  <i className="fas fa-tags" style={{ color: '#3E84FF' }}></i> {campaign.category} </i>
                            </div>
                        </div>
                        <p>
                            {campaign.desc.substr(0, 150) + "..."}.<br />
                        </p>
                        <div className="progress">
                            <div className="fundTags">
                                <div style={{ flex: 1, justifyContent: "center" }}>
                                    <div style={{ width: '100%', margin: '0 auto' }}>
                                        <img src={Flag} alt="Owner" className="rocket-icons" />
                                        Meta: <strong>${campaign.fundGoal}</strong> <br />
                                        <img src={Rocket} alt="Owner " className="rocket-icons" />
                                        Monto recaudado: <strong>${campaign.currentFund}</strong> <br />
                                        <i className="far fa-calendar" style={{ color: '#3E84FF' }}></i> Fecha Limite: <strong>{moment(campaign.date.limit).format("DD MMMM YYYY")}</strong><br />
                                        <i className="far fa-check-square" style={{ color: '#3E84FF' }}></i> Estado: <strong>{campaign.status} <i className="far fa-dot-circle" style={{ color: campaign.status.toLowerCase() === 'publicado' ? 'Chartreuse ' : 'tomato' }}></i></strong>.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Line percent={percentage(campaign.fundGoal, campaign.currentFund)} strokeWidth="2" trailWidth="2" strokeColor="#3E84FF" className="progress-box" />
                        <div className="button-box">
                            <FlatButton label={<span> Editar <i className="fas fa-edit"></i></span>} primary={true} disabled={campaign.status.toLowerCase() === "publicado" ? true : false} style={{ margin: '0 auto' }} />
                            {
                                campaign.status.toLowerCase() === "publicado" ?
                                    <FlatButton label={<span> Eliminar <i className="fas fa-trash"></i></span>} primary={true} style={{ margin: '0 auto' }} />
                                    :
                                    <FlatButton label={<span> Publicar <i className="fas fa-check-circle"></i></span>} primary={true} style={{ margin: '0 auto' }} />
                            }
                        </div>
                    </div>
                </div>
            })
        }
    </div>
};