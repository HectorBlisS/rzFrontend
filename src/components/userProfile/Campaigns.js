import React from 'react'
import { Line } from 'rc-progress'
import Rocket from '../../assets/cometa.png'
import Flag from '../../assets/bandera.png'
import { FlatButton, Dialog } from 'material-ui/'
import moment from 'moment'


export const Campaigns = ({ fakeFunds, percentage, getDate, handleModal, openModal }) => {
    return <div>
        {
            fakeFunds.map((campaign, index) => {

                return <div key={index} className="campaign-card">
                    <div className="left">
                        <div>
                            <img src={campaign.image} alt="Campaign Image" className="img-camp" />
                        </div>
                    </div>
                    <div className="right">
                        <h2>{campaign.name}</h2>
                        <div className="user-box">
                            <div className="img-user">
                                <img src={campaign.ownerPicture} alt="Owner Image" className="img-ownwer" />
                            </div>
                            <div className="info-user">
                                <h3 style={{ margin: 0 }}>{campaign.ownerName}</h3>
                                <i><i className="fas fa-map-marker-alt" style={{ color: '#3E84FF' }}></i> {campaign.location.city}, {campaign.location.country}.{" "}  <i className="fas fa-tags" style={{ color: '#3E84FF' }}></i> {campaign.category} </i>
                            </div>
                        </div>
                        <p>
                            {campaign.desc.substr(0, 150) + "..."}.<br />
                        </p>
                        <div className="progress">
                            <div className="fundTags">
                                <div style={{ flex: 1, justifyContent: "center" }}>
                                    <div style={{ width: '100%', margin: '0 auto' }}>
                                        <img src={Rocket} alt="Owner Image" className="rocket-icons" />
                                        Monto recaudado: <strong>${campaign.currentFund}</strong>
                                    </div>
                                </div>
                                <div style={{ flex: 1, justifyContent: "center" }}>
                                    <div style={{ width: '100%', margin: '0 auto' }}>
                                        <img src={Flag} alt="Owner Image" className="rocket-icons" />
                                        Meta: <strong>${campaign.fundGoal}</strong>
                                    </div>
                                </div>
                            </div>
                            <Line percent={percentage(campaign.fundGoal, campaign.currentFund)} strokeWidth="2" trailWidth="2" strokeColor="#3E84FF" className="progress-box" />
                            <div className="camp-date">
                                <div>
                                    {getDate(campaign.date.limit)} <br /> <strong>Dias restantes</strong>
                                </div>
                                <div>
                                    {moment(campaign.date.limit).format("DD/MMM/YYYY")} <br /><strong>Fecha límite</strong>
                                </div>
                            </div>
                        </div>
                        <div className="button-box">
                            <FlatButton label={<span style={{ color: "#3E84FF" }}> Ver mi recompensa. <i className="fas fa-hand-holding-usd" style={{ fontSize: '20px' }}></i></span>} primary={true} style={{ margin: '0 auto' }} onTouchTap={handleModal} />
                            <Dialog
                                title="Mis recompensas:"
                                style={{ backgroundColor: 'rgba(0,0,1,.3)', boxShadow: 'none !important' }}
                                actions={
                                    <FlatButton
                                        label="Cerrar"
                                        primary={true}
                                        style={{ color: "#3E84FF" }}
                                        onTouchTap={handleModal}
                                    />
                                }
                                overlayStyle={{ backgroundColor: 'transparent', boxShadow: 'none' }}
                                modal={false}
                                open={openModal}
                                onRequestClose={handleModal}
                            >
                                <p>
                                    <strong>{campaign.reward.title}</strong><br />
                                    {campaign.reward.desc} <br /> <br />
                                    <strong>Entrega aproximada:</strong> {moment(campaign.reward.date).format("DD/MM/YYYY")}
                                    <br />
                                </p>
                            </Dialog>
                        </div>
                    </div>
                </div>
            })
        }
    </div>
};