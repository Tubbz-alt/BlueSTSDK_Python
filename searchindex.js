Search.setIndex({docnames:["blue_st_sdk","blue_st_sdk.features","blue_st_sdk.features.standard_characteristics","blue_st_sdk.firmware_upgrade","blue_st_sdk.firmware_upgrade.utils","blue_st_sdk.utils","index","modules"],envversion:52,filenames:["blue_st_sdk.rst","blue_st_sdk.features.rst","blue_st_sdk.features.standard_characteristics.rst","blue_st_sdk.firmware_upgrade.rst","blue_st_sdk.firmware_upgrade.utils.rst","blue_st_sdk.utils.rst","index.rst","modules.rst"],objects:{"":{blue_st_sdk:[0,0,0,"-"]},"blue_st_sdk.debug_console":{DebugConsole:[0,1,1,""],DebugConsoleListener:[0,1,1,""]},"blue_st_sdk.debug_console.DebugConsole":{__init__:[0,2,1,""],add_listener:[0,2,1,""],get_node:[0,2,1,""],on_update_characteristic:[0,2,1,""],on_write_characteristic:[0,2,1,""],remove_listener:[0,2,1,""],write:[0,2,1,""]},"blue_st_sdk.debug_console.DebugConsoleListener":{on_stderr_receive:[0,2,1,""],on_stdin_send:[0,2,1,""],on_stdout_receive:[0,2,1,""]},"blue_st_sdk.feature":{ExtractedData:[0,1,1,""],Feature:[0,1,1,""],FeatureListener:[0,1,1,""],FeatureLogger:[0,1,1,""],Sample:[0,1,1,""]},"blue_st_sdk.feature.ExtractedData":{__init__:[0,2,1,""],get_read_bytes:[0,2,1,""],get_sample:[0,2,1,""]},"blue_st_sdk.feature.Feature":{__init__:[0,2,1,""],add_listener:[0,2,1,""],add_logger:[0,2,1,""],extract_data:[0,2,1,""],get_characteristic:[0,2,1,""],get_fields_description:[0,2,1,""],get_last_update:[0,2,1,""],get_name:[0,2,1,""],get_parent_node:[0,2,1,""],has_valid_index:[0,3,1,""],is_enabled:[0,2,1,""],is_notifying:[0,2,1,""],remove_listener:[0,2,1,""],remove_logger:[0,2,1,""],set_enable:[0,2,1,""],set_notify:[0,2,1,""],update:[0,2,1,""]},"blue_st_sdk.feature.FeatureListener":{on_update:[0,2,1,""]},"blue_st_sdk.feature.FeatureLogger":{log_update:[0,2,1,""]},"blue_st_sdk.feature.Sample":{__init__:[0,2,1,""],equals:[0,2,1,""],from_sample:[0,3,1,""],get_data:[0,2,1,""],get_description:[0,2,1,""],get_notification_time:[0,2,1,""],get_timestamp:[0,2,1,""]},"blue_st_sdk.features":{device_timestamp_feature:[1,0,0,"-"],feature_accelerometer:[1,0,0,"-"],feature_activity_recognition:[1,0,0,"-"],feature_audio_adpcm:[1,0,0,"-"],feature_audio_adpcm_sync:[1,0,0,"-"],feature_audio_scene_classification:[1,0,0,"-"],feature_gyroscope:[1,0,0,"-"],feature_humidity:[1,0,0,"-"],feature_magnetometer:[1,0,0,"-"],feature_pressure:[1,0,0,"-"],feature_proximity:[1,0,0,"-"],feature_proximity_gesture:[1,0,0,"-"],feature_stepper_motor:[1,0,0,"-"],feature_switch:[1,0,0,"-"],feature_temperature:[1,0,0,"-"],field:[1,0,0,"-"],standard_characteristics:[2,0,0,"-"]},"blue_st_sdk.features.device_timestamp_feature":{DeviceTimestampFeature:[1,1,1,""]},"blue_st_sdk.features.device_timestamp_feature.DeviceTimestampFeature":{__init__:[1,2,1,""]},"blue_st_sdk.features.feature_accelerometer":{FeatureAccelerometer:[1,1,1,""]},"blue_st_sdk.features.feature_accelerometer.FeatureAccelerometer":{DATA_LENGTH_BYTES:[1,4,1,""],DATA_MAX:[1,4,1,""],DATA_MIN:[1,4,1,""],FEATURE_DATA_NAME:[1,4,1,""],FEATURE_NAME:[1,4,1,""],FEATURE_UNIT:[1,4,1,""],FEATURE_X_FIELD:[1,4,1,""],FEATURE_Y_FIELD:[1,4,1,""],FEATURE_Z_FIELD:[1,4,1,""],X_INDEX:[1,4,1,""],Y_INDEX:[1,4,1,""],Z_INDEX:[1,4,1,""],__init__:[1,2,1,""],extract_data:[1,2,1,""],get_accelerometer_x:[1,3,1,""],get_accelerometer_y:[1,3,1,""],get_accelerometer_z:[1,3,1,""],read_accelerometer:[1,2,1,""]},"blue_st_sdk.features.feature_activity_recognition":{ActivityType:[1,1,1,""],FeatureActivityRecognition:[1,1,1,""]},"blue_st_sdk.features.feature_activity_recognition.ActivityType":{BIKING:[1,4,1,""],DRIVING:[1,4,1,""],ERROR:[1,4,1,""],FASTWALKING:[1,4,1,""],JOGGING:[1,4,1,""],NO_ACTIVITY:[1,4,1,""],STAIRS:[1,4,1,""],STATIONARY:[1,4,1,""],WALKING:[1,4,1,""]},"blue_st_sdk.features.feature_activity_recognition.FeatureActivityRecognition":{ACTIVITY_INDEX:[1,4,1,""],ALGORITHM_INDEX:[1,4,1,""],DATA_LENGTH_BYTES:[1,4,1,""],DATA_MAX:[1,4,1,""],DATA_MIN:[1,4,1,""],FEATURE_ACTIVITY_FIELD:[1,4,1,""],FEATURE_ALGORITHM_FIELD:[1,4,1,""],FEATURE_DATA_NAME:[1,4,1,""],FEATURE_NAME:[1,4,1,""],FEATURE_TIME_FIELD:[1,4,1,""],FEATURE_UNIT:[1,4,1,""],TIME_FIELD:[1,4,1,""],__init__:[1,2,1,""],extract_data:[1,2,1,""],get_activity:[1,3,1,""],get_algorithm:[1,3,1,""],get_time:[1,3,1,""]},"blue_st_sdk.features.feature_audio_adpcm":{ADPCMEngine:[1,1,1,""],FeatureAudioADPCM:[1,1,1,""]},"blue_st_sdk.features.feature_audio_adpcm.ADPCMEngine":{__init__:[1,2,1,""],decode:[1,2,1,""]},"blue_st_sdk.features.feature_audio_adpcm.FeatureAudioADPCM":{AUDIO_PACKAGE_SIZE:[1,4,1,""],DATA_LENGTH_BYTES:[1,4,1,""],DATA_MAX:[1,4,1,""],DATA_MIN:[1,4,1,""],FEATURE_DATA_NAME:[1,4,1,""],FEATURE_FIELDS:[1,4,1,""],FEATURE_NAME:[1,4,1,""],FEATURE_UNIT:[1,4,1,""],__init__:[1,2,1,""],bvSyncManager:[1,4,1,""],engineADPCM:[1,4,1,""],extract_data:[1,2,1,""],get_audio:[1,3,1,""],set_audio_sync_parameters:[1,2,1,""]},"blue_st_sdk.features.feature_audio_adpcm_sync":{FeatureAudioADPCMSync:[1,1,1,""]},"blue_st_sdk.features.feature_audio_adpcm_sync.FeatureAudioADPCMSync":{ADPCM_INDEX_INDEX:[1,4,1,""],ADPCM_PREDSAMPLE_INDEX:[1,4,1,""],DATA_LENGTH_BYTES:[1,4,1,""],DATA_MAX:[1,4,1,""],DATA_MIN:[1,4,1,""],FEATURE_DATA_NAME:[1,4,1,""],FEATURE_INDEX_FIELD:[1,4,1,""],FEATURE_NAME:[1,4,1,""],FEATURE_PREDSAMPLE_FIELD:[1,4,1,""],FEATURE_UNIT:[1,4,1,""],__init__:[1,2,1,""],extract_data:[1,2,1,""],getIndex:[1,5,1,""],getPredictedSample:[1,5,1,""]},"blue_st_sdk.features.feature_audio_scene_classification":{FeatureAudioSceneClassification:[1,1,1,""],SceneType:[1,1,1,""]},"blue_st_sdk.features.feature_audio_scene_classification.FeatureAudioSceneClassification":{DATA_LENGTH_BYTES:[1,4,1,""],DATA_MAX:[1,4,1,""],DATA_MIN:[1,4,1,""],FEATURE_DATA_NAME:[1,4,1,""],FEATURE_FIELDS:[1,4,1,""],FEATURE_NAME:[1,4,1,""],FEATURE_UNIT:[1,4,1,""],__init__:[1,2,1,""],extract_data:[1,2,1,""],get_scene:[1,3,1,""]},"blue_st_sdk.features.feature_audio_scene_classification.SceneType":{ERROR:[1,4,1,""],INDOOR:[1,4,1,""],IN_VEHICLE:[1,4,1,""],OUTDOOR:[1,4,1,""],UNKNOWN:[1,4,1,""]},"blue_st_sdk.features.feature_gyroscope":{FeatureGyroscope:[1,1,1,""]},"blue_st_sdk.features.feature_gyroscope.FeatureGyroscope":{DATA_LENGTH_BYTES:[1,4,1,""],DATA_MAX:[1,4,1,""],DATA_MIN:[1,4,1,""],FEATURE_DATA_NAME:[1,4,1,""],FEATURE_NAME:[1,4,1,""],FEATURE_UNIT:[1,4,1,""],FEATURE_X_FIELD:[1,4,1,""],FEATURE_Y_FIELD:[1,4,1,""],FEATURE_Z_FIELD:[1,4,1,""],SCALE_FACTOR:[1,4,1,""],X_INDEX:[1,4,1,""],Y_INDEX:[1,4,1,""],Z_INDEX:[1,4,1,""],__init__:[1,2,1,""],extract_data:[1,2,1,""],get_gyroscope_x:[1,3,1,""],get_gyroscope_y:[1,3,1,""],get_gyroscope_z:[1,3,1,""],read_gyroscope:[1,2,1,""]},"blue_st_sdk.features.feature_humidity":{FeatureHumidity:[1,1,1,""]},"blue_st_sdk.features.feature_humidity.FeatureHumidity":{DATA_LENGTH_BYTES:[1,4,1,""],DATA_MAX:[1,4,1,""],DATA_MIN:[1,4,1,""],FEATURE_DATA_NAME:[1,4,1,""],FEATURE_FIELDS:[1,4,1,""],FEATURE_NAME:[1,4,1,""],FEATURE_UNIT:[1,4,1,""],SCALE_FACTOR:[1,4,1,""],__init__:[1,2,1,""],extract_data:[1,2,1,""],get_humidity:[1,3,1,""],read_humidity:[1,2,1,""]},"blue_st_sdk.features.feature_magnetometer":{FeatureMagnetometer:[1,1,1,""]},"blue_st_sdk.features.feature_magnetometer.FeatureMagnetometer":{DATA_LENGTH_BYTES:[1,4,1,""],DATA_MAX:[1,4,1,""],DATA_MIN:[1,4,1,""],FEATURE_DATA_NAME:[1,4,1,""],FEATURE_NAME:[1,4,1,""],FEATURE_UNIT:[1,4,1,""],FEATURE_X_FIELD:[1,4,1,""],FEATURE_Y_FIELD:[1,4,1,""],FEATURE_Z_FIELD:[1,4,1,""],X_INDEX:[1,4,1,""],Y_INDEX:[1,4,1,""],Z_INDEX:[1,4,1,""],__init__:[1,2,1,""],extract_data:[1,2,1,""],get_magnetometer_x:[1,3,1,""],get_magnetometer_y:[1,3,1,""],get_magnetometer_z:[1,3,1,""],read_magnetometer:[1,2,1,""]},"blue_st_sdk.features.feature_pressure":{FeaturePressure:[1,1,1,""]},"blue_st_sdk.features.feature_pressure.FeaturePressure":{DATA_LENGTH_BYTES:[1,4,1,""],DATA_MAX:[1,4,1,""],DATA_MIN:[1,4,1,""],FEATURE_DATA_NAME:[1,4,1,""],FEATURE_FIELDS:[1,4,1,""],FEATURE_NAME:[1,4,1,""],FEATURE_UNIT:[1,4,1,""],SCALE_FACTOR:[1,4,1,""],__init__:[1,2,1,""],extract_data:[1,2,1,""],get_pressure:[1,3,1,""],read_pressure:[1,2,1,""]},"blue_st_sdk.features.feature_proximity":{FeatureProximity:[1,1,1,""]},"blue_st_sdk.features.feature_proximity.FeatureProximity":{DATA_LENGTH_BYTES:[1,4,1,""],DATA_MIN:[1,4,1,""],FEATURE_DATA_NAME:[1,4,1,""],FEATURE_NAME:[1,4,1,""],FEATURE_UNIT:[1,4,1,""],HIGH_RANGE_DATA_MAX:[1,4,1,""],HIGH_RANGE_FEATURE_FIELDS:[1,4,1,""],LOW_RANGE_DATA_MAX:[1,4,1,""],LOW_RANGE_FEATURE_FIELDS:[1,4,1,""],OUT_OF_RANGE_VALUE:[1,4,1,""],__init__:[1,2,1,""],extract_data:[1,2,1,""],get_proximity_distance:[1,3,1,""],is_out_of_range_distance:[1,3,1,""]},"blue_st_sdk.features.feature_proximity_gesture":{FeatureProximityGesture:[1,1,1,""],Gesture:[1,1,1,""]},"blue_st_sdk.features.feature_proximity_gesture.FeatureProximityGesture":{DATA_LENGTH_BYTES:[1,4,1,""],DATA_MAX:[1,4,1,""],DATA_MIN:[1,4,1,""],FEATURE_DATA_NAME:[1,4,1,""],FEATURE_FIELDS:[1,4,1,""],FEATURE_NAME:[1,4,1,""],FEATURE_UNIT:[1,4,1,""],__init__:[1,2,1,""],extract_data:[1,2,1,""],get_gesture:[1,3,1,""]},"blue_st_sdk.features.feature_proximity_gesture.Gesture":{ERROR:[1,4,1,""],LEFT:[1,4,1,""],RIGHT:[1,4,1,""],TAP:[1,4,1,""],UNKNOWN:[1,4,1,""]},"blue_st_sdk.features.feature_stepper_motor":{FeatureStepperMotor:[1,1,1,""],StepperMotorCommands:[1,1,1,""],StepperMotorStatus:[1,1,1,""]},"blue_st_sdk.features.feature_stepper_motor.FeatureStepperMotor":{COMMAND_DATA_LENGTH_BYTES:[1,4,1,""],COMMAND_FEATURE_FIELDS:[1,4,1,""],FEATURE_NAME:[1,4,1,""],STATUS_DATA_LENGTH_BYTES:[1,4,1,""],STATUS_FEATURE_FIELDS:[1,4,1,""],__init__:[1,2,1,""],extract_data:[1,2,1,""],get_motor_status:[1,3,1,""],read_motor_status:[1,2,1,""],write_motor_command:[1,2,1,""]},"blue_st_sdk.features.feature_stepper_motor.StepperMotorCommands":{MOTOR_MOVE_STEPS_BACKWARD:[1,4,1,""],MOTOR_MOVE_STEPS_FORWARD:[1,4,1,""],MOTOR_RUN_BACKWARD:[1,4,1,""],MOTOR_RUN_FORWARD:[1,4,1,""],MOTOR_STOP_RUNNING_WITHOUT_TORQUE:[1,4,1,""],MOTOR_STOP_RUNNING_WITH_TORQUE:[1,4,1,""]},"blue_st_sdk.features.feature_stepper_motor.StepperMotorStatus":{MOTOR_INACTIVE:[1,4,1,""],MOTOR_RUNNING:[1,4,1,""]},"blue_st_sdk.features.feature_switch":{FeatureSwitch:[1,1,1,""]},"blue_st_sdk.features.feature_switch.FeatureSwitch":{DATA_LENGTH_BYTES:[1,4,1,""],DATA_MAX:[1,4,1,""],DATA_MIN:[1,4,1,""],FEATURE_DATA_NAME:[1,4,1,""],FEATURE_FIELDS:[1,4,1,""],FEATURE_NAME:[1,4,1,""],FEATURE_UNIT:[1,4,1,""],__init__:[1,2,1,""],extract_data:[1,2,1,""],get_switch_status:[1,3,1,""],read_switch_status:[1,2,1,""],write_switch_status:[1,2,1,""]},"blue_st_sdk.features.feature_temperature":{FeatureTemperature:[1,1,1,""]},"blue_st_sdk.features.feature_temperature.FeatureTemperature":{DATA_LENGTH_BYTES:[1,4,1,""],DATA_MAX:[1,4,1,""],DATA_MIN:[1,4,1,""],FEATURE_DATA_NAME:[1,4,1,""],FEATURE_FIELDS:[1,4,1,""],FEATURE_NAME:[1,4,1,""],FEATURE_UNIT:[1,4,1,""],SCALE_FACTOR:[1,4,1,""],__init__:[1,2,1,""],extract_data:[1,2,1,""],get_temperature:[1,3,1,""],read_temperature:[1,2,1,""]},"blue_st_sdk.features.field":{Field:[1,1,1,""],FieldType:[1,1,1,""]},"blue_st_sdk.features.field.Field":{__init__:[1,2,1,""],get_max:[1,2,1,""],get_min:[1,2,1,""],get_name:[1,2,1,""],get_type:[1,2,1,""],get_unit:[1,2,1,""]},"blue_st_sdk.features.field.FieldType":{ByteArray:[1,4,1,""],DateTime:[1,4,1,""],Float:[1,4,1,""],Int16:[1,4,1,""],Int32:[1,4,1,""],Int64:[1,4,1,""],Int8:[1,4,1,""],UInt16:[1,4,1,""],UInt32:[1,4,1,""],UInt8:[1,4,1,""]},"blue_st_sdk.features.standard_characteristics":{feature_heart_rate:[2,0,0,"-"],standard_characteristic_to_feature_map:[2,0,0,"-"]},"blue_st_sdk.features.standard_characteristics.feature_heart_rate":{FeatureHeartRate:[2,1,1,""]},"blue_st_sdk.features.standard_characteristics.feature_heart_rate.FeatureHeartRate":{DATA_LENGTH_BYTES:[2,4,1,""],ENERGY_EXPENDED_FIELD:[2,4,1,""],ENERGY_EXPENDED_INDEX:[2,4,1,""],FEATURE_NAME:[2,4,1,""],HEART_RATE_FIELD:[2,4,1,""],HEART_RATE_INDEX:[2,4,1,""],RR_INTERVAL_FIELD:[2,4,1,""],RR_INTERVAL_INDEX:[2,4,1,""],__init__:[2,2,1,""],extract_data:[2,2,1,""],getEnergyExpended:[2,3,1,""],getHeartRate:[2,3,1,""],getRRInterval:[2,3,1,""],has8BitHeartRate:[2,3,1,""],hasEnergyExpended:[2,3,1,""],hasRRInterval:[2,3,1,""]},"blue_st_sdk.features.standard_characteristics.standard_characteristic_to_feature_map":{StandardCharacteristicToFeatureMap:[2,1,1,""]},"blue_st_sdk.features.standard_characteristics.standard_characteristic_to_feature_map.StandardCharacteristicToFeatureMap":{STANDARD_FEATURE_UUID:[2,4,1,""],__init__:[2,2,1,""]},"blue_st_sdk.firmware_upgrade":{firmware_upgrade:[3,0,0,"-"],firmware_upgrade_nucleo:[3,0,0,"-"],utils:[4,0,0,"-"]},"blue_st_sdk.firmware_upgrade.firmware_upgrade":{FirmwareUpgrade:[3,1,1,""],FirmwareUpgradeError:[3,1,1,""],FirmwareUpgradeListener:[3,1,1,""]},"blue_st_sdk.firmware_upgrade.firmware_upgrade.FirmwareUpgrade":{__init__:[3,2,1,""],add_listener:[3,2,1,""],get_console:[3,2,1,""],remove_listener:[3,2,1,""],upgrade_firmware:[3,2,1,""]},"blue_st_sdk.firmware_upgrade.firmware_upgrade.FirmwareUpgradeError":{CORRUPTED_FILE_ERROR:[3,4,1,""],INVALID_FIRMWARE_ERROR:[3,4,1,""],TRANSMISSION_ERROR:[3,4,1,""]},"blue_st_sdk.firmware_upgrade.firmware_upgrade.FirmwareUpgradeListener":{on_upgrade_firmware_complete:[3,2,1,""],on_upgrade_firmware_error:[3,2,1,""],on_upgrade_firmware_progress:[3,2,1,""]},"blue_st_sdk.firmware_upgrade.firmware_upgrade_nucleo":{FirmwareUpgradeDebugConsoleListener:[3,1,1,""],FirmwareUpgradeNucleo:[3,1,1,""],LoadingFileStatus:[3,1,1,""]},"blue_st_sdk.firmware_upgrade.firmware_upgrade_nucleo.FirmwareUpgradeDebugConsoleListener":{ACK_MSG:[3,4,1,""],BLOCK_OF_PACKETS_SIZE:[3,4,1,""],FIRMWARE_UPGRADE_COMMAND:[3,4,1,""],FIRMWARE_UPGRADE_TIMEOUT_ms:[3,4,1,""],LOST_MSG_TIMEOUT_ms:[3,4,1,""],MAX_MSG_SIZE:[3,4,1,""],__init__:[3,2,1,""],load_file:[3,2,1,""],on_stderr_receive:[3,2,1,""],on_stdin_send:[3,2,1,""],on_stdout_receive:[3,2,1,""]},"blue_st_sdk.firmware_upgrade.firmware_upgrade_nucleo.FirmwareUpgradeNucleo":{__init__:[3,2,1,""],get_console:[3,3,1,""],upgrade_firmware:[3,2,1,""]},"blue_st_sdk.firmware_upgrade.firmware_upgrade_nucleo.LoadingFileStatus":{ACK_CHECK:[3,4,1,""],CRC_CHECK:[3,4,1,""]},"blue_st_sdk.firmware_upgrade.utils":{firmware_file:[4,0,0,"-"],stm32crc32:[4,0,0,"-"]},"blue_st_sdk.firmware_upgrade.utils.firmware_file":{FirmwareFile:[4,1,1,""],FirmwareType:[4,1,1,""]},"blue_st_sdk.firmware_upgrade.utils.firmware_file.FirmwareFile":{__init__:[4,2,1,""],close:[4,2,1,""],get_crc_32:[4,2,1,""],get_size:[4,2,1,""],get_type:[4,2,1,""],open:[4,2,1,""]},"blue_st_sdk.firmware_upgrade.utils.firmware_file.FirmwareType":{BIN:[4,4,1,""],UNKNOWN:[4,4,1,""]},"blue_st_sdk.firmware_upgrade.utils.stm32crc32":{STM32Crc32:[4,1,1,""]},"blue_st_sdk.firmware_upgrade.utils.stm32crc32.STM32Crc32":{CRC_TABLE:[4,4,1,""],INITIAL_VALUE:[4,4,1,""],__init__:[4,2,1,""],get_value:[4,2,1,""],reset:[4,2,1,""],update:[4,2,1,""]},"blue_st_sdk.manager":{Manager:[0,1,1,""],ManagerListener:[0,1,1,""]},"blue_st_sdk.manager.Manager":{SCANNING_TIME_DEFAULT_s:[0,4,1,""],__init__:[0,2,1,""],add_features_to_node:[0,3,1,""],add_listener:[0,2,1,""],discover:[0,2,1,""],get_node_features:[0,3,1,""],get_node_with_name:[0,2,1,""],get_node_with_tag:[0,2,1,""],get_nodes:[0,2,1,""],instance:[0,3,1,""],is_discovering:[0,2,1,""],remove_listener:[0,2,1,""],remove_nodes:[0,2,1,""],reset_discovery:[0,2,1,""],start_discovery:[0,2,1,""],stop_discovery:[0,2,1,""]},"blue_st_sdk.manager.ManagerListener":{on_discovery_change:[0,2,1,""],on_node_discovered:[0,2,1,""]},"blue_st_sdk.node":{Node:[0,1,1,""],NodeDelegate:[0,1,1,""],NodeListener:[0,1,1,""],NodeStatus:[0,1,1,""],NodeType:[0,1,1,""]},"blue_st_sdk.node.Node":{__init__:[0,2,1,""],add_external_features:[0,2,1,""],add_listener:[0,2,1,""],characteristic_can_be_notified:[0,2,1,""],characteristic_can_be_read:[0,2,1,""],characteristic_can_be_written:[0,2,1,""],characteristic_has_other_notifying_features:[0,2,1,""],connect:[0,2,1,""],disable_notifications:[0,2,1,""],disconnect:[0,2,1,""],enable_notifications:[0,2,1,""],equals:[0,2,1,""],get_debug:[0,2,1,""],get_feature:[0,2,1,""],get_features:[0,2,1,""],get_friendly_name:[0,2,1,""],get_last_rssi:[0,2,1,""],get_last_rssi_update_date:[0,2,1,""],get_name:[0,2,1,""],get_protocol_version:[0,2,1,""],get_status:[0,2,1,""],get_tag:[0,2,1,""],get_tx_power_level:[0,2,1,""],get_type:[0,2,1,""],get_type_id:[0,2,1,""],is_alive:[0,2,1,""],is_connected:[0,2,1,""],is_sleeping:[0,2,1,""],notifications_enabled:[0,2,1,""],read_feature:[0,2,1,""],remove_listener:[0,2,1,""],set_notification_status:[0,2,1,""],update_advertising_data:[0,2,1,""],wait_for_notifications:[0,2,1,""],write_feature:[0,2,1,""]},"blue_st_sdk.node.NodeDelegate":{__init__:[0,2,1,""],handleNotification:[0,2,1,""]},"blue_st_sdk.node.NodeListener":{on_status_change:[0,2,1,""]},"blue_st_sdk.node.NodeStatus":{CONNECTED:[0,4,1,""],CONNECTING:[0,4,1,""],DEAD:[0,4,1,""],DISCONNECTING:[0,4,1,""],IDLE:[0,4,1,""],INIT:[0,4,1,""],LOST:[0,4,1,""],UNREACHABLE:[0,4,1,""]},"blue_st_sdk.node.NodeType":{BLUE_COIN:[0,4,1,""],GENERIC:[0,4,1,""],NUCLEO:[0,4,1,""],SENSOR_TILE:[0,4,1,""],SENSOR_TILE_101:[0,4,1,""],STEVAL_BCN002V1:[0,4,1,""],STEVAL_IDB008VX:[0,4,1,""],STEVAL_WESU1:[0,4,1,""]},"blue_st_sdk.python_utils":{"synchronized":[0,6,1,""],get_class:[0,6,1,""],lock:[0,6,1,""],lock_for_object:[0,6,1,""],synchronized_with_attr:[0,6,1,""]},"blue_st_sdk.utils":{ble_advertising_data_parser:[5,0,0,"-"],ble_node_definitions:[5,0,0,"-"],blue_st_exceptions:[5,0,0,"-"],bv_audio_sync_manager:[5,0,0,"-"],dict_put_single_element:[5,0,0,"-"],number_conversion:[5,0,0,"-"],unwrap_timestamp:[5,0,0,"-"],uuid_to_feature_map:[5,0,0,"-"]},"blue_st_sdk.utils.ble_advertising_data_parser":{BLEAdvertisingDataParser:[5,1,1,""]},"blue_st_sdk.utils.ble_advertising_data_parser.BLEAdvertisingDataParser":{ADVERTISING_DATA_MANUFACTURER_LENGTH_1:[5,4,1,""],ADVERTISING_DATA_MANUFACTURER_LENGTH_2:[5,4,1,""],VERSION_PROTOCOL_SUPPORTED_MAX:[5,4,1,""],VERSION_PROTOCOL_SUPPORTED_MIN:[5,4,1,""],__init__:[5,2,1,""],get_address:[5,2,1,""],get_board_sleeping:[5,2,1,""],get_board_type:[5,2,1,""],get_device_id:[5,2,1,""],get_feature_mask:[5,2,1,""],get_name:[5,2,1,""],get_protocol_version:[5,2,1,""],get_tx_power:[5,2,1,""]},"blue_st_sdk.utils.ble_node_definitions":{BLENodeDefinitions:[5,1,1,""],Config:[5,1,1,""],Debug:[5,1,1,""],FeatureCharacteristic:[5,1,1,""],Services:[5,1,1,""]},"blue_st_sdk.utils.ble_node_definitions.BLENodeDefinitions":{BASE_FEATURE_UUID:[5,4,1,""],BLUESTSDK_CHARACTERISTIC_UUID:[5,4,1,""],BLUESTSDK_SERVICE_UUID:[5,4,1,""],CONFIG_UUID:[5,4,1,""],DEBUG_UUID:[5,4,1,""],EXTENDED_FEATURE_UUID:[5,4,1,""]},"blue_st_sdk.utils.ble_node_definitions.Config":{CONFIG_BLUESTSDK_SERVICE_UUID:[5,4,1,""],CONFIG_COMMAND_BLUESTSDK_SERVICE_UUID:[5,4,1,""],REGISTERS_ACCESS_UUID:[5,4,1,""],is_config_service:[5,3,1,""]},"blue_st_sdk.utils.ble_node_definitions.Debug":{DEBUG_BLUESTSDK_SERVICE_UUID:[5,4,1,""],DEBUG_STDERR_BLUESTSDK_SERVICE_UUID:[5,4,1,""],DEBUG_STDINOUT_BLUESTSDK_SERVICE_UUID:[5,4,1,""],is_debug_characteristic:[5,3,1,""],is_debug_service:[5,3,1,""]},"blue_st_sdk.utils.ble_node_definitions.FeatureCharacteristic":{BASE_MASK_TO_FEATURE_DIC:[5,4,1,""],BLUESTSDK_BASE_FEATURES_UUID:[5,4,1,""],BLUESTSDK_EXTENDED_FEATURES_UUID:[5,4,1,""],EXTENDED_MASK_TO_FEATURE_DIC:[5,4,1,""],extract_feature_mask:[5,3,1,""],get_extended_feature_class:[5,3,1,""],is_base_feature_characteristic:[5,3,1,""],is_extended_feature_characteristic:[5,3,1,""]},"blue_st_sdk.utils.ble_node_definitions.Services":{BLUESTSDK_SERVICE_UUID_FORMAT:[5,4,1,""],is_known_service:[5,3,1,""]},"blue_st_sdk.utils.blue_st_exceptions":{InvalidBLEAdvertisingDataException:[5,7,1,""],InvalidDataException:[5,7,1,""],InvalidFeatureBitMaskException:[5,7,1,""],InvalidOperationException:[5,7,1,""]},"blue_st_sdk.utils.blue_st_exceptions.InvalidBLEAdvertisingDataException":{__init__:[5,2,1,""]},"blue_st_sdk.utils.blue_st_exceptions.InvalidDataException":{__init__:[5,2,1,""]},"blue_st_sdk.utils.blue_st_exceptions.InvalidFeatureBitMaskException":{__init__:[5,2,1,""]},"blue_st_sdk.utils.blue_st_exceptions.InvalidOperationException":{__init__:[5,2,1,""]},"blue_st_sdk.utils.bv_audio_sync_manager":{BVAudioSyncManager:[5,1,1,""]},"blue_st_sdk.utils.bv_audio_sync_manager.BVAudioSyncManager":{adpcm_index_in:[5,4,1,""],adpcm_predsample_in:[5,4,1,""],get_index_in:[5,3,1,""],get_predsample_in:[5,3,1,""],intra_flag:[5,4,1,""],isIntra:[5,3,1,""],reinitResetFlag:[5,3,1,""],setSyncParams:[5,3,1,""]},"blue_st_sdk.utils.dict_put_single_element":{DictPutSingleElement:[5,1,1,""]},"blue_st_sdk.utils.dict_put_single_element.DictPutSingleElement":{__init__:[5,2,1,""],put:[5,2,1,""],put_all:[5,2,1,""]},"blue_st_sdk.utils.number_conversion":{BigEndian:[5,1,1,""],LittleEndian:[5,1,1,""],NumberConversion:[5,1,1,""]},"blue_st_sdk.utils.number_conversion.BigEndian":{bytes_to_float:[5,3,1,""],bytes_to_int16:[5,3,1,""],bytes_to_int32:[5,3,1,""],bytes_to_uint16:[5,3,1,""],bytes_to_uint32:[5,3,1,""],float_to_bytes:[5,3,1,""],int16_to_bytes:[5,3,1,""],int32_to_bytes:[5,3,1,""],uint16_to_bytes:[5,3,1,""],uint32_to_bytes:[5,3,1,""]},"blue_st_sdk.utils.number_conversion.LittleEndian":{bytes_to_float:[5,3,1,""],bytes_to_int16:[5,3,1,""],bytes_to_int32:[5,3,1,""],bytes_to_uint16:[5,3,1,""],bytes_to_uint32:[5,3,1,""],float_to_bytes:[5,3,1,""],int16_to_bytes:[5,3,1,""],int32_to_bytes:[5,3,1,""],uint16_to_bytes:[5,3,1,""],uint32_to_bytes:[5,3,1,""]},"blue_st_sdk.utils.number_conversion.NumberConversion":{byte_to_uint8:[5,3,1,""]},"blue_st_sdk.utils.unwrap_timestamp":{UnwrapTimestamp:[5,1,1,""]},"blue_st_sdk.utils.unwrap_timestamp.UnwrapTimestamp":{__init__:[5,2,1,""],unwrap:[5,2,1,""]},"blue_st_sdk.utils.uuid_to_feature_map":{UUIDToFeatureMap:[5,1,1,""]},"blue_st_sdk.utils.uuid_to_feature_map.UUIDToFeatureMap":{__init__:[5,2,1,""]},blue_st_sdk:{debug_console:[0,0,0,"-"],feature:[0,0,0,"-"],features:[1,0,0,"-"],firmware_upgrade:[3,0,0,"-"],manager:[0,0,0,"-"],node:[0,0,0,"-"],python_utils:[0,0,0,"-"],utils:[5,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","classmethod","Python class method"],"4":["py","attribute","Python attribute"],"5":["py","staticmethod","Python static method"],"6":["py","function","Python function"],"7":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:classmethod","4":"py:attribute","5":"py:staticmethod","6":"py:function","7":"py:exception"},terms:{"00002a37":2,"0002a5d5c51b":5,"000e":5,"000f":5,"00805f9b34fb":2,"0x04c11db7":4,"0x0804000":3,"11e1":5,"9ab4":5,"boolean":5,"byte":[0,1,2,3,4,5],"case":[0,1,2,3,5],"class":[0,1,2,3,4,5],"default":[0,1],"enum":[0,1,3,4],"export":0,"final":0,"float":[0,1,2,5],"function":0,"int":[0,1,2,3,4,5],"long":1,"new":[0,2,3],"null":0,"return":[0,1,2,3,4,5],"short":[1,5],"static":1,"switch":1,"true":[0,1,2,3,5],"while":0,Adding:0,The:[0,1,2,3,4,5],__init__:[0,1,2,3,4,5],_abcol:5,about:0,ac36:5,acceleromet:1,accereromet:1,access:[0,5],ack:3,ack_check:3,ack_msg:3,acknowledg:3,acquir:[0,1],acquisit:0,activ:[1,5],activity_index:1,activitytyp:1,actual:5,add:[0,3,5],add_external_featur:0,add_features_to_nod:0,add_listen:[0,3],add_logg:0,add_nod:[],added:[0,3,5],addfeaturestonod:0,address:[0,3,5],adpcm:[1,5],adpcm_decod:1,adpcm_index:1,adpcm_index_in:5,adpcm_index_index:1,adpcm_predsampl:1,adpcm_predsample_in:5,adpcm_predsample_index:1,adpcmengin:1,advertis:[0,5],advertising_data:[0,5],advertising_data_manufacturer_length_1:5,advertising_data_manufacturer_length_2:5,after:[0,3],algorithm:[1,4],algorithm_index:1,aliv:0,all:[0,1,2,5],alloc:0,allow:[0,1,5],alreadi:0,among:0,ani:0,anymor:0,applic:0,arg:5,aris:0,arrai:[0,1,2,5],ask:0,assici:3,associ:5,asynchron:0,atom:0,audio:1,audio_package_s:1,audiosync:5,avail:[0,2,5],axi:1,back:3,background:0,base:[0,1,2,3,4,5],base_feature_uuid:5,base_mask_to_feature_d:5,been:[0,3],befor:0,behav:1,beyond:0,big:5,bigendian:5,bike:1,bin:4,bit:[0,1,2,4,5],bitmask:5,ble:[0,3,5],ble_advertising_data_pars:[0,6,7],ble_node_definit:[0,6,7],bleadvertisingdatapars:5,blenodedefinit:5,block:[0,3],block_of_packets_s:3,blue_coin:0,blue_st_except:[0,1,2,6,7],bluecoin:0,bluenrg1:0,bluenrg2:0,bluenrg:0,bluepi:0,bluest:[3,5],bluestsdk:[0,5],bluestsdk_base_features_uuid:5,bluestsdk_characteristic_uuid:5,bluestsdk_extended_features_uuid:5,bluestsdk_service_uuid:5,bluestsdk_service_uuid_format:5,bluetooth:[0,2,3,5],board:[0,3,5],bool:[0,1,2,3,5],bound:0,btle:0,btleexcept:0,buffer:[1,4],build:2,bv_audio_sync_manag:[0,6,7],bvaudiosyncmanag:5,bvsyncmanag:1,byte_to_uint8:5,bytearrai:[0,1,4],bytes_s:3,bytes_to_float:5,bytes_to_int16:5,bytes_to_int32:5,bytes_to_send:3,bytes_to_uint16:5,bytes_to_uint32:5,bytestofloat:[],bytestoint16:[],bytestoint32:[],bytestouint16:[],bytestouint32:[],bytetouint8:[],call:[0,3],callback:0,can:[0,1,3,4,5],capabl:[0,3],chang:[0,3],channel:0,char_handl:0,characterist:[0,2,5],characteristic_can_be_notifi:0,characteristic_can_be_read:0,characteristic_can_be_written:0,characteristic_has_other_notifying_featur:0,charset:0,check:[0,1,2,5],chip:4,class_nam:0,classif:1,classmethod:[0,1,2,3,5],close:[0,4],code:[0,1,3],colon:0,come:[0,1,5],command:[1,3,5],command_data_length_byt:1,command_feature_field:1,compar:[0,3],complet:5,compress:1,comput:[3,4],config:5,config_bluestsdk_service_uuid:5,config_command_bluestsdk_service_uuid:5,config_uuid:5,configur:5,connect:0,consol:[0,3],constructor:[0,1,2,3,4,5],contain:[0,1,2,5],content:[6,7],control:5,convers:5,convert:5,copi:0,copy_m:0,correctli:[0,3],correspond:[0,5],corrupted_file_error:3,costructor:3,crc32:4,crc:[3,4],crc_check:3,crc_tabl:4,creat:0,current:[0,4,5],data:[0,1,2,3,4,5],data_length_byt:[1,2],data_max:1,data_min:1,date:1,datetim:[0,1],dead:0,debug:[0,3,5],debug_bluestsdk_service_uuid:5,debug_consol:[3,6,7],debug_stderr_bluestsdk_service_uuid:5,debug_stdinout_bluestsdk_service_uuid:5,debug_uuid:5,debugconsol:[0,3],debugconsolelisten:[0,3],debuglisten:0,decim:1,decod:[0,1],decompress:1,defaultdeleg:0,defin:[0,2,3,5],definit:5,deleg:0,depend:1,describ:[0,1],descript:[0,1],descriptor:4,design:0,detect:1,devic:[0,1,3,5],device_id:0,device_timestamp_featur:[0,2,6,7],devicetimestampfeatur:[1,2],dict:[0,5],dict_put_single_el:[0,6,7],dictionari:[0,5],dictputsingleel:5,differ:[0,1,3,5],digit:1,disabl:[0,2],disable_notif:0,disappear:0,disconnect:0,discov:0,discoveri:0,distanc:1,doesn:[0,1,2],doing:0,dpcm:1,dps:1,drive:1,dummi:0,each:0,effect:0,either:1,elaps:0,element:5,elsewher:5,empti:0,enabl:[0,1,5],enable_notif:0,encod:0,end:5,endian:5,energi:[0,2,3],energy_expended_field:2,energy_expended_index:2,engin:1,engineadpcm:1,enough:[0,1,2],equal:0,equival:0,error:[0,1,3,5],except:5,exclus:0,exctract:5,execut:[0,1],expend:2,extend:[0,1,5],extended_feature_uuid:5,extended_mask_to_feature_d:5,extract:[0,1,2,5],extract_data:[0,1,2],extract_feature_mask:5,extracteddata:[0,1,2],fals:[0,1,2,3,5],famili:3,fastwalk:1,featur:[5,6,7],feature_acceleromet:[0,5,6,7],feature_activity_field:1,feature_activity_recognit:[0,5,6,7],feature_algorithm_field:1,feature_audio_adpcm:[0,5,6,7],feature_audio_adpcm_sync:[0,5,6,7],feature_audio_scene_classif:[0,5,6,7],feature_class:0,feature_data_nam:1,feature_field:1,feature_gyroscop:[0,5,6,7],feature_heart_r:[0,1],feature_humid:[0,5,6,7],feature_index_field:1,feature_magnetomet:[0,5,6,7],feature_nam:[1,2],feature_predsample_field:1,feature_pressur:[0,5,6,7],feature_proxim:[0,5,6,7],feature_proximity_gestur:[0,5,6,7],feature_stepper_motor:[0,5,6,7],feature_switch:[0,5,6,7],feature_temperatur:[0,5,6,7],feature_time_field:1,feature_unit:1,feature_x_field:1,feature_y_field:1,feature_z_field:1,featureacceleromet:[1,5],featureactivityrecognit:[1,5],featureaudioadpcm:[1,5],featureaudioadpcmsync:[1,5],featureaudiosceneclassif:[1,5],featurecharacterist:5,featuregyroscop:[1,5],featureheartr:2,featurehumid:[1,5],featurelisten:0,featurelogg:0,featuremagnetomet:[1,5],featurepressur:[1,5],featureproxim:[1,5],featureproximitygestur:[1,5],featuresteppermotor:[1,5],featureswitch:[1,5],featuretemperatur:[1,5],field:[0,2,6,7],fieldtyp:1,file:[3,4],filenam:4,finish:0,fire:0,firmwar:[3,4],firmware_fil:[0,3],firmware_upgrad:[0,6,7],firmware_upgrade_command:3,firmware_upgrade_consol:3,firmware_upgrade_nucleo:[0,6,7],firmware_upgrade_timeout_m:3,firmwarefil:[3,4],firmwaretyp:4,firmwareupgrad:3,firmwareupgradedebugconsolelisten:3,firmwareupgradeerror:3,firmwareupgradelisten:3,firmwareupgradenucleo:3,first:[0,5],fist:[0,5],five:1,flag:[0,2],float_to_byt:5,floattobyt:[],follow:5,form:[0,5],format:[0,4,5],found:[0,1,3,4,5],four:[1,5],friendli:0,from:[0,1,2,3,5],from_sampl:0,gain:0,gatewai:3,gener:0,gestur:1,get:[0,1,3,4,5],get_accelerometer_i:1,get_accelerometer_x:1,get_accelerometer_z:1,get_act:1,get_address:5,get_algorithm:1,get_audio:1,get_board_sleep:5,get_board_typ:5,get_characterist:0,get_class:0,get_consol:3,get_crc_32:4,get_data:0,get_debug:0,get_descript:0,get_device_id:5,get_extended_feature_class:5,get_featur:0,get_feature_mask:5,get_fields_descript:0,get_friendly_nam:0,get_gestur:1,get_gyroscope_i:1,get_gyroscope_x:1,get_gyroscope_z:1,get_humid:1,get_index_in:5,get_last_rssi:0,get_last_rssi_update_d:0,get_last_upd:0,get_magnetometer_i:1,get_magnetometer_x:1,get_magnetometer_z:1,get_max:1,get_min:1,get_motor_statu:1,get_nam:[0,1,5],get_nod:0,get_node_featur:0,get_node_with_nam:0,get_node_with_tag:0,get_notification_tim:0,get_parent_nod:0,get_predsample_in:5,get_pressur:1,get_protocol_vers:[0,5],get_proximity_dist:1,get_read_byt:0,get_sampl:0,get_scen:1,get_siz:4,get_statu:0,get_switch_statu:1,get_tag:0,get_temperatur:1,get_tim:1,get_timestamp:0,get_tx_pow:5,get_tx_power_level:0,get_typ:[0,1,4],get_type_id:0,get_unit:1,get_valu:4,getenergyexpend:2,getheartr:2,getindex:1,getpredictedsampl:1,getrrinterv:2,getscandata:0,given:[0,1,3,5],gui:0,gyroscop:1,handl:[0,1,3,4,5],handlenotif:0,happen:3,has8bitheartr:2,has:[0,1,2,3,5],has_valid_index:0,hasenergyexpend:2,hasrrinterv:2,have:[0,1,4,5],heart:[1,2],heart_rate_field:2,heart_rate_index:2,help:5,henc:4,hexadecim:0,high_range_data_max:1,high_range_feature_field:1,humid:1,identif:0,identifi:[0,5],idl:0,implement:[0,3,4,5],impli:0,in_vehicl:1,inaccess:[3,4],increas:3,indefinit:0,index:[0,1,5,6],indoor:1,info:1,inform:[0,1,2,5],init:0,initi:[0,2,4],initial_valu:4,input:[0,3,5],insert:5,insid:0,instanc:[0,3],instead:5,int16:1,int16_to_byt:5,int16tobyt:[],int32:1,int32_to_byt:5,int32tobyt:[],int64:1,int8:1,integ:[1,2,4,5],interact:0,interfac:[0,3],intern:0,interv:2,intra_flag:5,invalid_firmware_error:3,invalidbleadvertisingdataexcept:[0,5],invaliddataexcept:[0,1,2,5],invalidfeaturebitmaskexcept:[0,5],invalidoperationexcept:[0,1,5],invoc:0,is_al:0,is_base_feature_characterist:5,is_config_servic:5,is_connect:0,is_debug_characterist:5,is_debug_servic:5,is_discov:0,is_en:0,is_extended_feature_characterist:5,is_known_servic:5,is_notifi:0,is_out_of_range_dist:1,is_sleep:0,isintra:5,iso:0,iter:0,its:0,itself:1,jog:1,keep:5,kei:5,kept:0,known:0,kwarg:5,kwd:5,languag:0,last:0,left:1,length:[4,5],like:5,list:[0,1,5],listen:[0,3],littl:5,littleendian:5,load:3,load_fil:3,loadingfilestatu:3,lock:0,lock_for_object:0,lock_nam:0,log:0,log_upd:0,logger:0,look:0,lookup:4,lost:0,lost_msg_timeout_m:3,low:[0,3],low_range_data_max:1,low_range_feature_field:1,mac:[0,5],magnetomet:1,mai:3,make:0,manag:[2,3,5,6,7],managerlisten:0,mandatori:[1,5],manufactur:5,map:[0,2,5],mask:[0,5],mask_to_features_d:0,match:0,max:1,max_:1,max_msg_siz:3,maximum:[1,5],mbar:1,mdb:[0,5],mean:5,measur:[1,2],messag:[0,3,5],method:[0,1,3,5],mga:1,microphon:1,might:0,min:1,min_:1,minimum:[1,5],modul:[6,7],more:[0,1,2,5],most:0,motor:1,motor_inact:1,motor_move_steps_backward:1,motor_move_steps_forward:1,motor_run:1,motor_run_backward:1,motor_run_forward:1,motor_stop_running_with_torqu:1,motor_stop_running_without_torqu:1,msg:5,much:3,multipl:[3,4,5],must:[0,4,5],mutablemap:5,nack:3,name:[0,1,4,5],name_:1,nan:[1,2],necessari:1,need:[0,2,5],neg:2,new_nod:[],new_statu:0,nibbl:4,no_act:1,node:[1,2,3,5,6,7],nodedeleg:0,nodelisten:0,nodestatu:0,nodetyp:0,non:0,none:[0,1,3,5],noth:0,notif:0,notifi:[0,3],notifications_en:0,notify_upd:0,notimplementederror:[0,3],nucleo:[0,3],number:[0,1,2,4,5],number_convers:[0,6,7],numberconvers:5,numer:5,obj:0,object:[0,1,2,3,4,5],off:0,offer:0,offset:[0,1,2],old:0,old_statu:0,on_discovery_chang:0,on_node_discov:0,on_status_chang:0,on_stderr_rec:[0,3],on_stdin_send:[0,3],on_stdout_rec:[0,3],on_upd:0,on_update_characterist:0,on_upgrade_firmware_complet:3,on_upgrade_firmware_error:3,on_upgrade_firmware_progress:3,on_write_characterist:0,one:[0,1,3,5],onli:[0,3,4,5],onto:3,open:[0,4],oper:[0,1,5],opposit:0,option:0,order:[3,5],oserror:[3,4],other:0,otherwis:[0,1,2,3,5],out:1,out_of_range_valu:1,outdoor:1,output:[0,3],overrid:0,overwritten:0,packag:[6,7],packet:[3,5],page:6,pair:[0,5],paramet:[0,1,2,3,4,5],pars:[0,5],particularli:0,pass:1,perform:[0,1],peripher:0,pleas:0,point:5,polynomi:4,popul:5,posit:[0,5],possibl:[0,3],power:[0,5],preceed:0,predsampl:[1,5],present:[],pressur:1,previous:3,process:[0,1,3],properli:[3,4],properti:0,protocol:[0,3,5],provid:[0,5],proxim:1,put:5,put_al:5,python:0,python_util:[6,7],rais:[0,1,2,3,4,5],range_valu:1,rate:[1,2],raw:[0,1,2],raw_data:0,read:[0,1,2,3,4,5],read_acceleromet:1,read_byt:0,read_featur:0,read_gyroscop:1,read_humid:1,read_magnetomet:1,read_motor_statu:1,read_pressur:1,read_switch_statu:1,read_temperatur:1,receiv:[0,1,3,5],recent:0,recogn:[1,5],recognit:1,refer:[0,1,2,5],referenc:0,reflect:0,regist:[0,1,5],registers_access_uuid:5,reinitresetflag:5,relat:[0,5],releas:0,rememb:0,remov:[0,3],remove_listen:[0,3],remove_logg:0,remove_nod:0,repres:0,request:0,requir:[0,1,5],reset:[0,4,5],reset_discoveri:0,resourc:0,respect:0,respons:[0,3,4],right:1,root:0,rr_interval_field:2,rr_interval_index:2,rssi:0,run:[0,3],same:[0,4,5],sampl:[0,1,2,5],scale_factor:1,scan:0,scan_entri:0,scanentri:0,scanning_time_default_:0,scene:1,scenetyp:1,sdk:[2,5],search:[0,6],second:0,secur:0,see:[0,1],self:0,send:[0,1,3,5],sensit:0,sensor:[0,1],sensor_til:0,sensor_tile_101:0,sensortil:0,sent:[0,3,5],separ:0,servic:[0,5],set:[0,1,5],set_audio_sync_paramet:1,set_en:0,set_notifi:0,set_notification_statu:0,setsyncparam:5,share:0,show:0,show_warn:0,side:2,sign:[2,5],simplifi:3,singl:5,singleton:0,six:1,size:4,skip:0,sleep:[0,5],some:[0,3],sourc:[0,1,2,3,4,5],spec:[1,2],specif:[0,2],stair:1,standard:[0,2,3],standard_characterist:[0,1],standard_characteristic_to_feature_map:[0,1],standard_feature_uuid:2,standardcharacteristictofeaturemap:2,start:[0,1,2,3,5],start_discoveri:0,state:5,stationari:1,statu:[0,1,3,5],status_data_length_byt:1,status_feature_field:1,stderr:[0,3,5],stderr_characterist:0,stdin:[0,3],stdinout_characterist:0,stdout:[0,3,5],step:1,stepper:1,steppermotorcommand:1,steppermotorstatu:1,steval:0,steval_bcn002v1:0,steval_idb008vx:0,steval_wesu1:0,stm32:4,stm32crc32:[0,3],stm32l4:3,stop:0,stop_discoveri:0,store:2,str:[0,1,2,3,4,5],stream:[0,5],stress:3,string:0,submodul:[6,7],subpackag:[6,7],subscript:0,success:1,successfulli:0,summar:[0,1],support:[0,1,5],sync:1,synch:1,synchron:[0,1,5],synchronized_with_attr:0,syncmanag:1,system:1,tabl:4,tag:0,tap:1,temperatur:1,test:[0,5],than:5,thi:[0,1,2,3,5],those:0,thought:0,thread:0,three:1,through:[0,5],throuth:0,thu:[0,1,3],tile:0,time:[0,1,3,5],time_field:1,timeout:[0,3],timeout_:0,timestamp:[0,1,2,5],too:3,tool:5,track:5,transmiss:[0,5],transmission_error:3,turn:0,twenti:1,two:[0,1,3,5],type:[0,1,2,3,4,5],type_:1,uint16:1,uint16_to_byt:5,uint16tobyt:[],uint32:1,uint32_to_byt:5,uint32tobyt:[],uint8:1,under:5,uniqu:0,unit:1,unit_:1,unknown:[0,1,4],unreach:0,unsign:[4,5],until:0,unwrap:5,unwrap_timestamp:[0,6,7],unwraptimestamp:5,updat:[0,1,2,3,4],update_advertising_data:0,upgrad:3,upgrade_firmwar:3,upgradefw:3,upload:3,uprgad:3,used:[0,1,3],useful:0,user:[0,3],user_defined_featur:0,using:[0,1,4],util:[0,1,2,3,6,7],uuid:[0,2,5],uuid_to_feature_map:[0,2,6,7],uuidtofeaturemap:[2,5],valid:[0,1,5],valu:[0,1,2,4,5],valueerror:[3,4],version:[0,5],version_protocol_supported_max:5,version_protocol_supported_min:5,via:3,viceversa:5,wai:0,wait:0,wait_for_notif:0,walk:1,warn:0,well:[0,5],wesu1:0,when:[0,1,3],whenev:[0,3,5],where:[0,1,2,5],whether:[0,5],which:[0,1,5],whose:3,without:0,work:[4,5],write:[0,1,3,5],write_featur:0,write_motor_command:1,write_switch_statu:1,written:[0,1,3],x01:3,x_index:1,xxxx:5,xxxxxxxx:5,y_index:1,you:[0,5],yyyi:5,z_index:1},titles:["blue_st_sdk package","blue_st_sdk.features package","blue_st_sdk.features.standard_characteristics package","blue_st_sdk.firmware_upgrade package","blue_st_sdk.firmware_upgrade.utils package","blue_st_sdk.utils package","Welcome to BlueSTSDK\u2019s documentation!","blue_st_sdk"],titleterms:{ble_advertising_data_pars:5,ble_node_definit:5,blue_st_except:5,blue_st_sdk:[0,1,2,3,4,5,6,7],bluestsdk:6,bv_audio_sync_manag:5,content:[0,1,2,3,4,5],debug_consol:0,device_timestamp_featur:1,dict_put_single_el:5,document:6,featur:[0,1,2],feature_acceleromet:1,feature_activity_recognit:1,feature_audio_adpcm:1,feature_audio_adpcm_sync:1,feature_audio_scene_classif:1,feature_gyroscop:1,feature_heart_r:2,feature_humid:1,feature_magnetomet:1,feature_pressur:1,feature_proxim:1,feature_proximity_gestur:1,feature_stepper_motor:1,feature_switch:1,feature_temperatur:1,field:1,firmware_fil:4,firmware_upgrad:[3,4],firmware_upgrade_nucleo:3,indic:6,manag:0,modul:[0,1,2,3,4,5],node:0,number_convers:5,packag:[0,1,2,3,4,5],python_util:0,standard_characterist:2,standard_characteristic_to_feature_map:2,stm32crc32:4,submodul:[0,1,2,3,4,5],subpackag:[0,1,3],tabl:6,unwrap_timestamp:5,util:[4,5],uuid_to_feature_map:5,welcom:6}})