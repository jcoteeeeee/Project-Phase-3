class AppointmentsController < ApplicationController
    def index
        appointments = Appointment.all
        render json: appointments
    end
    
    def show 
        appointment = Appointment.find_by!(id: params[:id])
        render json: appointment   
    end 

    def create 
        appointment = Appointment.create(client_id: params[:client_id], artist_id: params[:artist_id], tattoo_id: params[:tattoo_id], apt_datetime: params[:apt_datetime])
        render json: appointment
    end

    def update 
        appointment = Appointment.find_by!(id: params[:id])
        appointment.update!(client_id: params[:client_id], artist_id: params[:artist_id], tattoo_id: params[:tattoo_id], apt_datetime: params[:apt_datetime])
        render json: appointment
    end 

    def destroy 
        appointment = Appointment.find_by!(id: params[:id])
        appointment.destroy!
    end 

end
