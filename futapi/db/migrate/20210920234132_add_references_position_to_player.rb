class AddReferencesPositionToPlayer < ActiveRecord::Migration[6.1]
  def change
    add_reference :players, :position, null: false, foreign_key: true
  end
end
