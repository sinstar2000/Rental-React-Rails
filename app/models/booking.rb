class Booking < ActiveRecord::Base
  validates :guest, :spot, :start_date, :end_date, presence: true
  validate :spot_available
  # , :valid_start_and_end

  belongs_to :guest,
    class_name: "User",
    foreign_key: :guest_id
  belongs_to :spot
  belongs_to :availability

  # def spot_must_be_available()
  #   spot = Spot.find(self.spot_id)
  # end

  def spot_available
    return unless self.start_date && self.end_date
    spot_availability = self.spot.get_availability
    unless ((start_date..end_date).to_a - spot_availability).empty?
      errors[:spot] << "unavailable at selected dates"
    end
  end

  # def valid_start_and_end
  #   return unless self.start_date && self.end_date
  #   return if self.start_date < self.end_date
  #     errors[:start_date] << "must come before end date"
  #     errors[:end_date] << "must come after start date"
  # end

end